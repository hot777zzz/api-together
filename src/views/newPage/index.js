import { Button } from 'antd';

export default function NewPage() {

    async function getResponse() {
        const content = '你好'; // 传递给后端的请求内容
    const eventSource = new EventSource(`http://localhost:3002/ai/generate-stream?content=${encodeURIComponent(content)}`);

        eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Received data:', data);
        };

        eventSource.onerror = (error) => {
        console.error('Stream error:', error);
        eventSource.close();
        };

        
          
    }

    return (
        <div>
            <Button onClick={getResponse}>newPage</Button>
        </div>
    );
}
