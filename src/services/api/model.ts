export type BaseModel<T> = {
  status: number;
  message: string;
  data?: T;
};

export type AuthenticateModel = {
  accessToken: string;
  refreshToken: string;
};
