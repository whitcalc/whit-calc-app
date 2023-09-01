export type UserLoginRequestBody = {
  code: string;
};

export type UserLoginResponseBody = {
  id: string;
  timers: any[];
  first_name: string;
  last_name: string;
  email: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
};

export type UserToken = {
  token: string;
};

export type UserJWT = {
  usr: string;
  exp: number;
};
