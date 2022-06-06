import React from 'react'

function Chatbot() {
  return (
    <div>
      <df-messenger
        intent="WELCOME"
        chat-title="TraverseFeedback"
        agent-id="0bd5f576-da86-48b0-83fb-f101a90eafd8"
        language-code="en"
      />
    </div>
  );
}

export default Chatbot