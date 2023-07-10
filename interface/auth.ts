export interface ILogin {
    usernameOrEmail: string;
    password: string;
}

export interface ISignup {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface IJwtTokenData {
    id: string;
    roles: string[];
}