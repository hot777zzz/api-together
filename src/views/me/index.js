import { Avatar, Button, Flex,Drawer,Space,Input } from "antd";
import { useUserInfo, modifyUser } from "../../api/login";
import { useEffect,useState,useCallback } from "react";
import './index.css'



const App = () => {
    const getUserInfo = useCallback(useUserInfo(), []);
    const [info, setInfo] = useState({});
    const [isOpen, setIsOpen] = useState(false);
   
      const onClose = () => {
        setIsOpen(false);
      };
      const modify = async () => {
        const res = await modifyUser(info);
        setIsOpen(false);
        console.log(res);
      }
    useEffect(() => {
        const fetchData = async () => {
            const res = await getUserInfo.getUserInfo();
            setInfo(res.data.data);
            console.log(res);
        }
       fetchData();
    },[getUserInfo]);  
    return (
        <>
        <div>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
            shape="square"
            size={200}
            />
           
        </div>
        <Flex vertical="true" justify="center">
        <span>用户名：{info.username}</span>
        <Button type="primary" className="btn" onClick={() => setIsOpen(true)} >修改数据</Button>


        </Flex>
        <Drawer open={isOpen} onClose={() => setIsOpen(false)}
            title="修改用户信息"
            width={720}
            styles={{
              body: {
                paddingBottom: 80,
              },
            }}
            extra={
              <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={modify} type="primary">
                  Submit
                </Button>
              </Space>
            }
            >
            <Flex vertical="true" justify="center">
            <span>用户名：</span>
            <Input type="text" placeholder={info.username} onChange={(e) => setInfo({ ...info, username: e.target.value })}/> 
            <span>手机号：</span>
            <Input type="text" placeholder={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })}/>
            <span>单位：</span>
            <Input type="text" placeholder={info.danwei} onChange={(e) => setInfo({ ...info, danwei: e.target.value })}/>
            </Flex>

        </Drawer>
        </>
    )
}

export default function Me(){
   
    return (
        <>
        <App /> 
        </>
    )
}