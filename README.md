# Chat Chart App 🧠📊

A sleek ChatGPT-style web app built with **Next.js**, using the **Gemini API** for chat, and **ECharts** to render dynamic visualizations based on the chat content. Styled using **Ant Design** and `.module.scss`.

---

## ✨ Features

- 💬 Chat interface with Gemini (Google AI)
- 📈 Draws interactive charts using ECharts
- 🧼 Clean UI with Ant Design + SCSS modules
- ❌ No chat history saved (ephemeral UI)

---

## 🧱 Tech Stack

- **Next.js (App Router)**
- **React+**
- **Ant Design**
- **ECharts (via echarts-for-react)**
- **TypeScript**
- **SCSS Modules**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/chat-chart-app.git
cd chat-chart-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Create .env.local

```
NEXT_PUBLIC_GEMINI_API_KEY="your_google_gemini_api_key"
```

## Run application

```bash
npm run dev
# or
yarn dev

```

## Project Structure

Base on atomic design: https://atomicdesign.bradfrost.com

```
src/
├── components/
│ ├── atoms/
│ │ └── TextMessage.tsx
│ ├── molecules/
│ ├── organisms/
│ │ └── ChatWindow.tsx
├── hooks/
│ └── useChat.ts
├── services/
│ └── gemini.ts
├── styles/
│ └── globals.scss
└── pages/
└── utils/
```

# Author

KHOA NGUYEN - @nguyenduykhoa2601
