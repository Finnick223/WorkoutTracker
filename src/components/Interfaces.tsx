import { To } from "react-router-dom";

export interface trainingItemProps {
    id: To;
    trainingName: String;
    category: String;
    date: String;
}

export interface userCardProps {
    username: String;
    firstname: String;
    lastname: String;
    email: String;
}
export interface FormDataInterface {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repasswd: string;
    gender: string;
    country: string;
    agree: boolean;
    formErrors: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        repasswd: string;
    };
    emailValid: boolean;
    passwordValid: boolean;
    repasswdValid: boolean;
    formValid: boolean;
}