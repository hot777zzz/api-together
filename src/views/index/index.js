import React from 'react';
import { Menu } from 'antd';
// import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const items = [
  {
    label: <Link to="/me">我</Link>,
    key: 'mail',
  },
  {
    label: <Link to="/program">共计接口信息</Link>,
    key: 'app',
  },
  {
    label: '功能实现',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: '前端功能合集',
        children: [
          {
            label: <Link to="newPage">新页面</Link>,
            key: 'setting:1',
          },
          {
            label: <Link to="funThings">接口测试页</Link>,
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: '后端功能合集',
        children: [
          {
            label: <Link to="ai">AI</Link>,
            key: 'setting:3',
          },
          {
            label: <Link to="dataSta">数据统计</Link>,
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://github.com/hot777zzz" target="_blank" rel="noopener noreferrer">
        我的github主页
      </a>
    ),
  },
];
 
export default function Index(){

  const navigate = useNavigate();
 const [current, setCurrent] = useState('');
  const onClick = (e) => {
    // console.log('click ', e.key);
    setCurrent(e.key);
  };

  const handleDeselect = () => {
    setCurrent(''); // 清除当前选中项
    navigate('/'); // 路由跳转到根路径
  };

  return (
    <>
    <div style={{ display: 'flex' }}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        style={{ width: '200px' }}
        onDeselect={() => handleDeselect()}
      />
      <Outlet/>
      </div>
    </>
  );
};

