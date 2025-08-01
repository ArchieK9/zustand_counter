# 🧮 Zustand Counter App (with Reset Function)

This is a simple React + Zustand project that demonstrates how to manage global state using Zustand. The app features a counter with **increment**, **decrement**, and **reset** functionality.

## 🚀 Built With

- [Vite](https://vitejs.dev/) – Fast React development
- [React](https://reactjs.org/)
- [Zustand](https://github.com/pmndrs/zustand) – State management made simple

## 🧠 Features

- Global state using Zustand
- Actions: `increment`, `decrement`, `resetCount`
- Component-level reactivity using selectors

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/ArchieK9/zustand_counter.git
cd zustand_counter
npm install
npm run dev

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
}));
