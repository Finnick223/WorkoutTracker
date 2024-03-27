import { To } from "react-router-dom";

export interface trainingItemProps {
    id: To;
    trainingName: string;
    category: string;
    date: string;
}

export interface userCardProps {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
}
export interface FormDataInterface {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repasswd: string;
    gender: string;
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