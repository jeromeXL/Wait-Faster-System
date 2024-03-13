import { UserRole } from "./user";
import {  getAxios } from "./useAxios";
import { jwtDecode } from 'jwt-decode';

export interface DecodedToken {
	exp: number,
	iat: number,
	jti: string,
	subject: {
		userId: string;
		role: UserRole;
	},
	type: string
}


export const login = async (request: LoginRequest) => {
    const response = await getAxios().post<AuthTokens>("/auth/login", request);
    const { access_token, refresh_token } = response.data;

    localStorage.setItem("accessToken", access_token);
    localStorage.setItem("refreshToken", refresh_token);

	// Decode the JWT to get the user's role
	const decodedToken: DecodedToken = jwtDecode<DecodedToken>(access_token);
	localStorage.setItem('userRole', decodedToken.subject.role.toString());
	return decodedToken.subject;
};

export interface LoginRequest {
    username: string;
    password: string;
}

export interface AuthTokens {
    access_token: string;
    access_token_expires: string;
    refresh_token: string;
    refresh_token_expires?: string;
}