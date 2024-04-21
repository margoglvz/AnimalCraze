"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
from dotenv import load_dotenv
import os
from .AnimalResults import AnimalResults

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
    image_processing = False
    image_made = False
    story_processing = False
    story_made = False

    def get_dalle_result(self, form_data: dict[str, str]):
        animal = form_data["animal"]
        name = form_data["name"]
        emotion = form_data["emotion"]
        location = form_data["location"]
        dalle_prompt_text: str = f"A {emotion} {animal} that lives in {location}"
        chatgtp_prompt_text: str = f"Tell a story in 4 sentences about a {emotion} {animal} \
            named {name} who lives in {location}" 

        self.image_made = False
        self.image_processing = True
        # Yield here so the image_processing take effects and the circular progress is shown.
        
        yield
        # try:
        #     response = get_openai_client().images.generate(
        #         prompt=dalle_prompt_text, n=1, size="1024x1024"
        #     )
        #     self.image_url = response.data[0].url
        #     self.image_processing = False
        #     self.image_made = True
        #     yield
        # except Exception as ex:
        #     self.image_processing = False
        #     yield rx.window_alert(f"Error with OpenAI Execution. {ex}")
        
        self.story_made = False
        self.story_processing = True
        
        yield
        try:
            response = get_openai_client().chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": chatgtp_prompt_text}
                ]
            )
            self.story = response.choices[0].message.content
            print(self.story)
            rx.box(
                rx.text(self.story,
                        font_weight="bold",
                        font_size="2em"))

            self.story_processing = False
            self.story_made = True
            yield
        except Exception as ex:
            self.story_processing = False
            yield rx.window_alert(f"Error with OpenAI Execution. {ex}")
        yield rx.redirect("/AnimalResults")



def index():
    return rx.center(
        rx.vstack(
            rx.heading("Animal Generator", font_size="1.5em"),
            rx.form(
                rx.vstack(
                    rx.input(
                        id="animal",
                        placeholder="Enter an animal",
                        size="3",
                    ),
                    rx.input(
                        id="name",
                        placeholder="Enter a name",
                        size="3",
                    ),
                    rx.input(
                        id="emotion",
                        placeholder="Enter an emotion",
                        size="3",
                    ),
                    rx.input(
                        id="location",
                        placeholder="Enter a location",
                        size="3",
                    ),
                    rx.button(
                        "SUBMIT",
                        on_click=rx.redirect("C:\\Users\\msgal\\Developer\\AnimalCraze\\dalle\\dalle\\AnimalResults.py"),
                        external=True,
                        size="3",
                    ),
                    align="stretch",
                    spacing="2",
                ),
                width="100%",
                on_submit=State.get_dalle_result,
            ),
            rx.divider(),
            rx.cond(
                State.image_processing,
                rx.chakra.circular_progress(is_indeterminate=True),
                rx.cond(
                    State.image_made,
                    rx.image(
                        src=State.image_url,
                    ),
                ),
            ),
            width="25em",
            bg="white",
            padding="2em",
            align="center",
        ),
        width="100%",
        height="100vh",

        background= "radial-gradient(circle at 22% 11%, rgba(41, 242, 194, .20), hsla(0,0%,100%,0) 19%), radial-gradient(circle at 82% 25%, rgba(19, 128, 255, .25), hsla(0,0%,100%,0) 55%), radial-gradient(circle at 25% 61%, rgba(185, 77, 251, .28), hsla(0,0%,100%,0) 55%)"
    )



# Add state and page to the app.
app = rx.App(
    theme=rx.theme(
        appearance="light", has_background=True, radius="medium", accent_color="mint"
    ),
)


app.add_page(index, title="Reflex:DALL-E")
app.add_page(AnimalResults, title="Reflex:Animal Results")

#rx.redirect
