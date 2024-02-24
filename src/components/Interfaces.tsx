
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