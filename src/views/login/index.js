import './index.css';
import { Button, Flex, Input, message } from 'antd';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../../store/store';
import { login } from '../../api/login';

function Login() {
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useStore(); // 从 useStore 获取 setToken 和 clearToken
  const [redirect, setRedirect] = useState(false); // 新增状态控制跳转
  const [messageApi, contextHolder] = message.useMessage();

  const error = (res) => {
    messageApi.error(res);
  };
  const sendRequest = async () => {
    const data = {
      username,
      password
    };
    const res = await login(data);
    console.log(res);
    if (res.data.code !== 200) {
      error(res.message);
      return;
    }
      setToken(res.data.data);
      console.log('登录成功', useStore.getState().token);
      setRedirect(true); // 设置跳转状态为 true

  };

  if (redirect) {
    return <Navigate to="/" />; // 在条件满足时跳转
  }

  return (
    <>

    <Flex vertical="true" align="center" >
    {contextHolder}
      <h1>登录</h1>
      <Input className='input'
        size="large"
        value={username}
        onChange={(e) => setuserName(e.target.value)}
        placeholder="请输入用户名"
      />
      <Input.Password className='input'
        size="large"
        type="password" // 建议将密码字段设置为 type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="请输入密码"
      />
      <Button onClick={sendRequest} size='large' type='primary'>登录</Button>
      
    </Flex>
    
    </>
  );
}

export default Login;