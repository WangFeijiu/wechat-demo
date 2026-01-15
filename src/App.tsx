import React from 'react';
import chatData from './chatData.json';
import ChatBubble from './components/ChatBubble';
import './i18n';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col p-4 overflow-y-auto">
      <h1 className="text-xl font-bold mb-4">{t('wechat_chat_demo')}</h1>
      <div className="flex flex-col space-y-1">
        {chatData.map((msg, idx) => (
          <ChatBubble
            key={idx}
            content={msg.content}
            type={msg.type as 'text' | 'emoji' | 'image'}
            isLeft={msg.from === t('userB')}
            time={msg.time}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
