import {useState} from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'


export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('')

  function saveInputTest(event) {
    setInputText(event.target.value);
  }

  const newChatMessages = [
    ...chatMessages,
    {
      message: inputText,
      sender: 'user',
      id: crypto.randomUUID()
    }
  ]

  function sendMessage() {
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages(
      [
        ...newChatMessages,
        {
          message: response,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]
    );




    setInputText('');
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to ChatBot"
        size="30"
        onChange={saveInputTest}
        value={inputText}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}