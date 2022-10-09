import axiosInstance from "./index";
import { ControlRateReponse, TestRateReponse, TestlRateRequest, UserRequest, UserResponse } from "./type";

const endpoints = {
    testRate: {
        get: (userid: number = 1) => axiosInstance.get(`Users/${userid}/TestRate`),
        post: (userid: number = 1, data: TestlRateRequest) => axiosInstance.post<TestRateReponse>(`Users/${userid}/TestRate`, data),
        put: (userid: number = 1, data: TestRateReponse) => axiosInstance.put(`Users/${userid}/TestRate/${data.id}`, data),
    },
    controlRate: {
        get: (userid: number = 1) => axiosInstance.get(`Users/${userid}/ControlRate`),
        post: (userid: number = 1, data: ControlRateReponse) => axiosInstance.post<ControlRateReponse>(`Users/${userid}/ControlRate`, data),
        put: (userid: number = 1, data: ControlRateReponse) => axiosInstance.put<ControlRateReponse>(`Users/${userid}/ControlRate/${data.id}`, data),
    },
    user: {
        get: (userId: number = 1) => axiosInstance.get(`Users/${userId}`),
        post: (data: UserRequest) => axiosInstance.post<UserResponse>(`Users`, data),
    },
}
export { endpoints }