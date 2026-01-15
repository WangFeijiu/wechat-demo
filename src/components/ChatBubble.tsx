
import { useTranslation } from 'react-i18next';

type ChatProps = {
    content: string;
    type: 'text' | 'emoji' | 'image';
    isLeft: boolean;
    time: string;
};

const ChatBubble: React.FC<ChatProps> = ({ content, type, isLeft, time }) => {
    const { t } = useTranslation();
    return (
        <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} mb-2`}>
            <div className={`max-w-xs px-3 py-2 rounded-lg ${isLeft ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}>
                {type === 'text' || type === 'emoji' ? (
                    <span className="break-words">{content}</span>
                ) : type === 'image' ? (
                    <img src={content} className="rounded-lg w-32 h-32 object-cover" alt={t('chat_img', 'chat img')} />
                ) : null}
                <div className="text-xs text-gray-500 mt-1 text-right">{time}</div>
            </div>
        </div>
    );
};

export default ChatBubble;

// 国际化改造建议：如有更多中文内容可继续提取
