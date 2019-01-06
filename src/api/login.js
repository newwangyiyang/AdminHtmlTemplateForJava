import axiosJson from '@/utils/axiosJson'

export const loginUser = json => axiosJson.post('/user/loginUser', json)


export const getUserByToken = () => axiosJson.post('/user/getUserByToken')

