export type User = {
  dob: {
    date: string;
    age: number;
  };
  id: {
    name: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  email: string;
  gender: string;
  phone: string;
  location: {
    city: string;
    country: string;
    state: string;
  };
  login: {
    password: string;
    username: string;
  };
};
