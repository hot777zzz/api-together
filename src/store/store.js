import {create} from 'zustand';

export const useStore = create((set) => ({
  token: null, // 初始状态为 null
  setToken: (newToken) => set({ token: newToken }),
  clearToken: () => set({ token: null }),
}));

export const useMessageStore = create((set) => ({
  message: null, // 初始状态为 null
  setMessage: (newMessage) => set({ message: newMessage }),
  clearMessage: () => set({ message: null }),
}));