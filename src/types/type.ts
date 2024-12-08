export type toastType = {
  status: string;
  message: string;
};

export type singupType = {
  username?: string;
  email?: string;
  password?: string;
};
export type loginType = {
  email?: string;
  password?: string;
};

export type UserType = {
  username: string;
  email: string;
  _id: string;
};

export type UserMenue = {
  _id: string;
  username: string;
  email: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
