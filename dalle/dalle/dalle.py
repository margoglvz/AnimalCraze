"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
from .newpage import newpage
from dotenv import load_dotenv
import os

import openai

load_dotenv()

_client = None


def get_openai_client():
    global _client
    if _client is None:
        _client = openai.OpenAI(api_key=os.getenv("API_KEY"))

    return _client

class State(rx.State):
    """The app state."""

    image_url = ""
    story = ""

    def get_image(self, dalle_prompt: str):
        try:
            response = get_openai_client().images.generate(
                prompt=dalle_prompt, n=1, size="1024x1024"
            )
            image_url = response.data[0].url

        except Exception as ex:
            return rx.window_alert(f"Error with OpenAI Execution. {ex}")
        
        self.image_url = image_url
    
    
    def get_story(self, chatgtp_prompt: str):
        try:
            response = get_openai_client().chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": chatgtp_prompt}
                ]
            )
            story = response.choices[0].message.content

        except Exception as ex:
            return rx.window_alert(f"Error with OpenAI Execution. {ex}")

        self.story = story


    def process(self, form_data: dict[str, str]):
        animal = form_data["animal"]
        name = form_data["name"]
        emotion = form_data["emotion"]
        location = form_data["location"]
        dalle_prompt_text = f"A {emotion} {animal} that lives in {location}"
        chatgtp_prompt_text = f"Tell a story in 4 sentences about a {emotion} {animal} \
            named {name} who lives in {location}" 
        
        self.get_image(dalle_prompt_text)
        self.get_story(chatgtp_prompt_text)

        return rx.redirect("/newpage")


def index():
    return rx.center(
        rx.vstack(
            rx.heading("Animal Generator", font_size="1.5em"),
            rx.form(
                rx.vstack(
                    rx.input(
                        id="animal",
                        placeholder="Enter a prompt..",
                        size="3",
                    ),
                    rx.input(
                        id="name",
                        placeholder="Enter a prompt..",
                        size="3",
                    ),
                    rx.input(
                        id="emotion",
                        placeholder="Enter a prompt..",
                        size="3",
                    ),
                    rx.input(
                        id="location",
                        placeholder="Enter a prompt..",
                        size="3",
                    ),
                    rx.button(
                        "SUBMIT",
                        type="submit",
                        size="3",
                    ),
                    align="stretch",
                    spacing="2",
                ),
                width="100%",
                on_submit=State.process,
            ), 
            width="25em",
            bg="white",
            padding="2em",
            align="center",
        ),
        width="100%",
        height="100vh",
        background="radial-gradient(circle at 22% 11%,rgba(41, 242, 194,.20), hsla(0,0%,100%,0) 19%),radial-gradient(circle at 82% 25%,rgba(19,128,255,.18),hsla(0,0%,100%,0) 35%),radial-gradient(circle at 25% 61%,rgba(185, 77, 251, .28),hsla(0,0%,100%,0) 55%)",
    )

def new():
    return newpage(State)

# Add state and page to the app.
app = rx.App(
    theme=rx.theme(
        appearance="light", has_background=True, radius="medium", accent_color="mint"
    ),
)


app.add_page(index, title="Reflex:DALL-E")
app.add_page(newpage(State), route="newpage", title="REFLEX:NEW")
