import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import IndexPage from './views/index/index'; 
import Me from './views/me'; 
import Program from './views/program/program';
import NewPage from './views/newPage';
import Login from './views/login';
import FunThings from './views/funThings';
import Ai from './views/ai';
import DataSta from './views/dataSta';
import { useNavigate } from 'react-router-dom';
import { useStore } from './store/store';
import { useEffect } from 'react';
// import {Button} from 'antd';

const App = () => {
  const { token } = useStore(); // 从 store 中获取 token
  const navigate = useNavigate();

  useEffect(() => {
    // console.log('token:', token);
    // 如果 token 不存在，重定向到登录页面
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <IndexPage /> // 返回你的主组件
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <div>Error</div>,
    children: [
      {
        path: "me", // Remove leading slash
        element: <Me /> // Ensure you have the correct component name
      },
      {
        path: "program", // Remove leading slash
        element: <Program /> // Ensure you have the correct component name
      },
      {
        path: "funThings", // Remove leading slash
        element: <FunThings /> // Ensure you have the correct component name
      },
      {
        path: "ai",
        element: <Ai/>
      },
      {
        path:"dataSta",
        element:<DataSta/>
      }
    ]
  },{
    path:"/newPage",
    element:<NewPage/>
  },{
    path:"/login",
    element:<Login/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
