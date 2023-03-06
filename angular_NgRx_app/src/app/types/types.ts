export type Name = {
    name: string;
    gender: 'boy' | 'girl';
  };
  export type ResponseName = {
    name: string;
    gender: 'boy' | 'girl';
    _id: string;
  };
  export type GenderNeutralNames = {
    name: string,
    meaning: string,
  };