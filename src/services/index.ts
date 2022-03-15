import AuthenticateAPI from './api/authenticateAPI';

type ErrorType = {
  message: string;
};

export * from './api/model';
export { AuthenticateAPI, type ErrorType };
