import { json } from "react-router-dom";

export async function getMes(message) {
  try {
    const response = await fetch('http://localhost:3002/ai/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: message }), // 发送请求的消息内容
    });

    if (!response.body) {
      throw new Error('响应中缺少 body');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let result = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break; // 读取结束
      result += decoder.decode(value, { stream: true });
      console.log('Stream chunk:', result); // 打印每次读取到的内容
    }

    return JSON.parse(result); // 返回最终的结果
  } catch (error) {
    console.error('Error fetching message:', error);
    throw error;
  }
}
