import axios, { AxiosResponse } from "axios"
import { SignupRequest } from "../_dto/SignupRequest"
import { LoginRequest } from "../_dto/LoginRequest"

const BASE_URL = 'http://localhost:5001/api/v1'

export class AuthService {

    public static signup = async (data: SignupRequest): Promise<AxiosResponse> => {
        return axios.post(`${BASE_URL}/signup`, data)
    }

    public static login = async (data: LoginRequest): Promise<AxiosResponse> => {
        return axios.post(`${BASE_URL}/login`, data)
    }

    public static validateAccessToken = async (accessToken: string): Promise<AxiosResponse> => {
        return axios.post(`${BASE_URL}/validate_token`, null, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
    }

}
