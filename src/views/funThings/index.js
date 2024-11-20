import axios from "axios";
import { useEffect,useState } from "react";
import "./funThings.css"
import { Image } from "antd";

export default function FunThings() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get("https://uapis.cn/api/hotlist?type=history").then((res) => {
            setHistory(res.data.data);
            console.log(res.data.data);
        })
    }, []);


    return (
        <div className="history-container">
            <Image src="https://uapis.cn/api/bing.php" preview={false} height={"300px"} width={"80%"} />
            {history.map((item) => (
                <div key={item.index} className="history-card">
                    <h3>{item.index}. {item.title}</h3>
                </div>
            ))}
        </div>
    )
}