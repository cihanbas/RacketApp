export enum RateType {
    test = 'RateUsTest',
    control = 'RateUsControl'
}

interface ControlRateReponse {
    displayCount: number
    rate: number
    isRated: boolean
    isDisabled: boolean
    displayDate: Date
    nextShowDate: Date
    isRemindMeLater: boolean
    feedbackMsg: string
    UserId: number
    id:number
}
 
interface TestRateReponse {
    displayCount: number
    rate: number
    isRated: boolean
    isDisabled: boolean
    displayDate: Date
    nextShowDate: Date
    closedCount: number
    UserId: number
    id:number
}
interface TestlRateRequest {
    displayCount?: number
    rate?: number
    isRated?: boolean
    isDisabled?: boolean
    nextShowDate?: Date
    closedCount?: number
}
interface UserResponse {
    name: string
    rateType: RateType
    createdAt: Date
    id: number
}
interface UserRequest {
    name: string
    rateType: RateType
}



export type {
    ControlRateReponse,
    TestRateReponse,
    TestlRateRequest,
    UserResponse,
    UserRequest
}