from flask import Flask, render_template, request
import openai
import os

app = Flask(__name__)

openai.api_key = os.getenv("OPENAI_API_KEYN")

# Test the OpenAI API connection
try:
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": "Hello!"}]
    )
    print(response.choices[0].message['content'])
except Exception as e:
    print(f"Error: {str(e)}")

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/convert", methods=["POST"])
def translate():
    if request.method == "POST":
        source_language = request.form.get("source")
        target_language = request.form.get("target")
        code = request.form.get("code")

        messages = [
            {"role": "user", "content": f"Translate this function from {source_language} into {target_language}:\n\n{code}"}
        ]

        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=messages,
                temperature=0,
                max_tokens=1050,
                top_p=1,
                frequency_penalty=0,
                presence_penalty=0
            )
            output = response.choices[0].message['content']
        except Exception as e:
            output = f"Error: {str(e)}"
        
        return render_template("translate.html", output=output)

if __name__ == "__main__":
    app.run(debug=True)
