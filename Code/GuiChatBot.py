# This is a web version of ChatBot.py, which uses Flask to create a web app.

# Importing Libraries
from flask import Flask, render_template, request
from BotDefinition import OpenAIBot

# Creating the Flask App
app = Flask(__name__)

# Importing Bot Definition
chatbot = OpenAIBot("gpt-3.5-turbo")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chatbot')
def render_chatbot():
    print("Accessed chatbot")
    return render_template('ChatBot.html')

@app.route('/doctor')
def render_doctor():
    return render_template('doctor.html')

@app.route('/test')
def render_test():
    return render_template('test.html')

@app.route('/resources')
def render_resources():
    return render_template('resources.html')


@app.route('/chat', methods=['POST'])
def chat():
    # Get Prompt from User
    print("Chatting")
    prompt = request.form['prompt']

    # User can stop the chat by sending 'End Chat' as a Prompt
    if prompt.upper() == 'END CHAT':
        return 'END CHAT'

    # Generate and Print the Response from ChatBot
    response = chatbot.generate_response(prompt)
    return response

if __name__ == '__main__':
    app.run(debug=True, port=8000)
