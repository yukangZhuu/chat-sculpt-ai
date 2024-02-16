


export async function processMessageToChatGPT(chatMessages, systemMessage, API_KEY) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role: role, content: messageObject.message };
    });
  
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [systemMessage, ...apiMessages]
    }
  
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });
  
      const data = await response.json();
      console.log(data);
  
      return {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      };
    } catch (error) {
      console.error("Error in processMessageToChatGPT:", error);
      return null; // Or handle error as per your application's needs
    }
  }