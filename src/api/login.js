import request from './request'
import { useStore } from '../store/store'



export function login(data) {
    return request({
        url: '/auth/login',
        method: 'post',
        data:data
    })
}

export function useUserInfo() {
    const { token } = useStore() // 获取 token
    // 返回获取用户信息的函数
    const getUserInfo = async () => {
        try {
            const response = await request({
                url: '/user',
                method: 'get',
                headers: {
                    'Authorization': 'Bearer ' + token, // 使用 token 进行认证
                },
            });
            return response; // 返回 API 请求结果
        } catch (error) {
            console.error('Error fetching user info:', error);
            throw error; // 抛出错误
        }
    };
    return { getUserInfo }; // 返回 API 请求函数
}

export function modifyUser(data) {
    
    return request({
        url: '/user?username='+data.username+'&danwei='+data.danwei+'&phone='+data.phone,
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + useStore.getState().token
        }
    })
}
