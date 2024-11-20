import { ProChat } from "@ant-design/pro-chat";
import { useTheme } from "antd-style";
import { getMes } from "../../api/ai";
import { useMessageStore } from "../../store/store";


export default function Home() {
  const theme = useTheme();
  const setMessage = useMessageStore((state) => state.setMessage);
  const message = useMessageStore((state) => state.message);


  return (
    <div
      style={{
        backgroundColor: theme.colorBgLayout,
        height: "97vh",
        width: "100vw",
      }}
    >
      <ProChat
        style={{
          height: "100%",
          width: "100%",
        }}
        request={async (messages) => {
          console.log('messages',messages);
          
          const res = await getMes(messages[messages.length - 1].content);
          // console.log(JSON.parse(res.data));
          const result = JSON.parse(res.data);
          
          
            
          return result.message.content.richText[0].children[0].text;
        }}
        initialChats={message}
        onChatsChange={(messages) => {
          setMessage(messages);
        }}
      />
    </div>
  );
}
