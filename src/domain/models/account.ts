export type AccountModel = {
  id: string;
  firstName: string;
  lastName: string;
  roles : string;
  email: string;
  password: string;
  accessToken?: string;
  forgotPasswordAccessToken?: number;
  forgotPasswordExpiresIn?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};
