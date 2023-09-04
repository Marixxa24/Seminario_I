/* de esta manera no funciona 
  document.addEventListener('DOMContentLoaded', function () {
    const openChatButton = document.getElementById('open-chat');
    const closeChatButton = document.getElementById('close-chat');
    const chatbot = document.getElementById('chatbot');

    // Función para abrir la ventana de chat
    openChatButton.addEventListener('onclick', function () {
      chatbot.style.display = 'block';
  });

    // Función para cerrar la ventana de chat
    closeChatButton.addEventListener('click', function () {
      chatbot.style.display = 'none';
  });

    // Aquí puedes agregar la lógica para enviar mensajes y recibir respuestas del chatbot
    const messageInput = document.getElementById('message-input');
    const sendMessageButton = document.getElementById('send-message');

    sendMessageButton.addEventListener('click', function () {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            // Agrega aquí la lógica para enviar el mensaje al chatbot y mostrar la respuesta.
            // Por ejemplo, puedes agregar la respuesta en la sección de "chatbot-messages".
            const chatbotMessages = document.querySelector('.chatbot-messages');
            const userMessage = document.createElement('div');
            userMessage.className = 'chatbot-message user';
            userMessage.textContent = messageText;
            chatbotMessages.appendChild(userMessage);

            // Aquí debes enviar el mensaje al chatbot y obtener la respuesta del chatbot
            // Luego, puedes agregar la respuesta del chatbot como un elemento '.chatbot-message bot' en chatbotMessages
            // Por simplicidad, este ejemplo solo muestra el mensaje del usuario.
            messageInput.value = '';
        }
    });
});


*/
// script.js

// Función para abrir el modal
function openChat() {
  var modal = document.getElementById("chatbot");
  modal.style.display = "block";
}

// Función para cerrar el modal
function closeChat() {
  var modal = document.getElementById("chatbot");
  modal.style.display = "none";
}
