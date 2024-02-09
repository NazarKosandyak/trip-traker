import {
  createWithEmailAndPasswordErrorsEnum,
  singInErrorsEnum,
} from "@/types/auth.types";

export const signInErrorsHandler = (errCode: string) => {
  switch (errCode) {
    case singInErrorsEnum.userNotFound:
      // errorNotification("User not found");
      break;
    case singInErrorsEnum.wrongPassword:
      // errorNotification("Wrong password");
      break;
    default:
    // errorNotification("Something went wrong");
  }
};

export const signUpErrorsHandler = (errCode: string) => {
  switch (errCode) {
    case createWithEmailAndPasswordErrorsEnum.emailAlreadyUsed:
      // errorNotification("Email already in use");
      break;
    case createWithEmailAndPasswordErrorsEnum.invalidEmail:
      // errorNotification("Invalid email");
      break;
    case createWithEmailAndPasswordErrorsEnum.operationNotAllowed:
      // errorNotification("Operation not allowed");
      break;
    case createWithEmailAndPasswordErrorsEnum.weakPassword:
      // errorNotification("Weak password");
      break;
    default:
    // errorNotification("");
  }
};
