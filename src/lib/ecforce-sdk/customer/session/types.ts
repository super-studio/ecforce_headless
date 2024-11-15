export type SignInRequest = {
  customer: {
    email: string;
    password: string;
  };
};

export type SignInResponse = {
  id: number;
  email: string;
  authentication_token: string;
};

export type SignOutResponse = void;

export type ErrorResponse = {
  errors: {
    code: string;
    message: string;
  }[];
};
