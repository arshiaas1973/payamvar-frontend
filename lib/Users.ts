'use server';
import 'server-only';
import Axios from './Axios';
import { AxiosError } from 'axios';

const LoginUser = async (user: FormData) => {
    try {
        var { data } = await Axios.post(
            `/api/v1/login-user`,
            user);
        return data;
    } catch (ex: any) {
        return {status: "failed", result: ex?.response?.data.result ?? "errors.serverError"}
    }
};
const RegisterUser = async (user: FormData) => {
    try {
        var { data } = await Axios.post(
            `/api/v1/login-user`,
            user);
        return data;
    } catch (ex: any) {
        return {status: "failed", result: ex?.response?.data.result ?? "errors.serverError"}
    }
};
export { LoginUser, RegisterUser }