export enum singInErrorsEnum {
  userNotFound = "auth/user-not-found",
  wrongPassword = "auth/wrong-password",
}

export enum createWithEmailAndPasswordErrorsEnum {
  emailAlreadyUsed = "auth/email-already-in-use",
  invalidEmail = "auth/invalid-email",
  operationNotAllowed = "auth/operation-not-allowed",
  weakPassword = "auth/weak-password",
}

export interface IUserSignIn {
  email: string;
  password: string;
}
