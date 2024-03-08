const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatbot = document.querySelector(".chatbot");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

const btn = document.getElementById('access-chatbot');

btn.addEventListener('click', function handleClick() {
    const initialText = 'Go to Comet - our Emotional Support Bot';
    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btn.textContent = 'Close chats';
        console.log("Change mein aaya toh")
    } else {
        btn.textContent = initialText;
    }
});

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">&#129302;</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) {
        return;
    }

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    console.log(userMessage)
    fetch('http://localhost:5001/api/call_python_function', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: userMessage })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let res = data["result"]
            const incomingChatLi = createChatLi(res, "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
            // debugg er
            const c = document.getElementsByClassName("chat-input");
            // document.getElementsByClassName("chat-input").scrollIntoView(false);
            // document.getElementsByClassName("chat-input").scrollIntoView({ block: "end" });
            // document.getElementsByClassName("chat-input").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            chatbot.scrollBy(300, 300);
            chatInput.focus();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

function showInformation() {
    // Get the selected option value
    var selectedOption = document.getElementById("resourcesDropdown").value;

    // Hide all information divs
    var informationDivs = document.querySelectorAll('.resource-info');
    informationDivs.forEach(function (div) {
        div.style.display = 'none';
    });

    // Show the selected information div
    var selectedInfoDiv = document.getElementById(selectedOption + '-info');
    if (selectedInfoDiv) {
        selectedInfoDiv.style.display = 'block';
    }

    var logoDiv = document.getElementById("logo-resource");
    logoDiv.style.display = 'none';
}

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(event.target);

    // Make an asynchronous request to the Web3Forms API
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data if needed
        console.log(data);
        document.getElementById('msg').innerText = 'Form submitted successfully!';

        // Optionally, reset the form
        event.target.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('msg').innerText = 'Error submitting the form.';
    });
}

