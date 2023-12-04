import { User } from 'types/user.types'
import axios, { AxiosResponse } from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export class UserServices {
	static async getAllUsers(): Promise<User[]> {
		const response: AxiosResponse = await axios.get(`${BASE_URL}/users`)
		//info repetida, check this
		console.log(response.data)
		return response.data
	}
}
