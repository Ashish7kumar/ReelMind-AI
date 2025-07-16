type ConvexUser = {
  _id: string;
  _creationTime: number;
  name: string;
  email: string;
  pictureURL: string;
  credits: number;

};

type AuthContextType = {
  user: any;
  convexUser: ConvexUser | null;
};

export default AuthContextType;
