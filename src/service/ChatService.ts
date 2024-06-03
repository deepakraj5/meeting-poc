import axios, { AxiosResponse } from "axios"

const BASE_URL = 'http://localhost:5001/api/v1'

export class ChatService {

    public static createRoom = async (): Promise<AxiosResponse> => {
        return axios.post(`${BASE_URL}/rooms`)
    }

}
