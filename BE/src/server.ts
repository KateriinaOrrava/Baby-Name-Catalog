import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import Name from "./NameSchema";
import NeutralName from "./neutralNameSchema";
//Cross-Origin Resource Sharing
import cors from "cors";

import mongoose from "mongoose";

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/nameCatalog");

const db = mongoose.connection;
// db.createCollection("genderNeutralNames", {
//   capped: true,
//   size: 5242880,
//   max: 5000,
// });
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to DB"));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
  // seedName.save();
});

app.get("/names/:gender", async ({ params }: Request, res: Response) => {
  try {
    const filter = { gender: params.gender };
    const all = await Name.find(filter);
    res.send(all);
  } catch (error) {
    throw error;
  }
});

app.get("/names", async (req: Request, res: Response) => {
  try {
    const filter = {};
    const all = await Name.find(filter);
    res.send(all);
  } catch (error) {
    throw error;
  }
});

app.post(`/addName`, async ({ body }: Request, res: Response) => {
  try {
    await Name.create({
      name: body.name,
      gender: body.gender,
    });
    console.log("Name added!");
  } catch (error) {
    throw error;
  }
});

app.delete(
  `/nameToDelete/:name`,
  async ({ params }: Request, res: Response) => {
    try {
      await Name.deleteOne({ name: params.name });
    } catch (error) {
      throw error;
    }
    res.json(params.name);
  }
);

/// gender neutral names

app.get("/genderNeutralNames", async (req: Request, res: Response) => {
  try {
    const filter = {};
    const all = await NeutralName.find(filter);
    res.send(all);
  } catch (error) {
    throw error;
  }
});
app.get(
  "/genderNeutralNames/nameToDelete/:name",
  async ({ params }: Request, res: Response) => {
    try {
      await NeutralName.deleteOne({ name: params.name });
    } catch (error) {
      throw error;
    }
    res.json(params.name);
  }
);
app.post(
  `/genderNeutralNames/addName`,
  async ({ body }: Request, res: Response) => {
    try {
      await NeutralName.create({
        name: body.name,
        meaning: body.meaning,
      });
      console.log("Name added!");
    } catch (error) {
      throw error;
    }
  }
);

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
