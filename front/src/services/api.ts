import axios from 'axios';

const api = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/',
	timeout: 1000,
});


export default class Api {
 	static async getNormalData(){
		const res = await api.get('/data');
		return res;
	}

	static async getFourierData(){
		const res = await api.get('/furrier');
		return res;
	}

	static async getWaveletData(){
		const res = await api.get('/wavelet');
		return res;
	}
}