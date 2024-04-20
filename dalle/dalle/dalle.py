"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

import os

import openai

_client = None


def get_openai_client():
    global _client
    if _client is None:
        _client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    return _client


class State(rx.State):
    """The app state."""

    image_url = ""
    image_processing = False
    image_made = False

    def get_dalle_result(self, form_data: dict[str, str]):
        prompt_text: str = form_data["prompt_text"]
        self.image_made = False
        self.image_processing = True
        # Yield here so the image_processing take effects and the circular progress is shown.
        yield
        try:
            response = get_openai_client().images.generate(
                prompt=prompt_text, n=1, size="1024x1024"
            )
            self.image_url = response.data[0].url
            self.image_processing = False
            self.image_made = True
            yield
        except Exception as ex:
            self.image_processing = False
            yield rx.window_alert(f"Error with OpenAI Execution. {ex}")

class State2(rx.State):
    """The app state."""

    image_url = ""
    image_processing = False
    image_made = False
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
        for key in form_data.keys():
            self.form_data[key] = form_data[key]

    def check_if_valid(self, form_data: dict[str]) -> bool:
        entry: str = form_data["prompt_text"]
        '''
        Checks if user entry is valid
        by comparing to database of valid entries
        '''
        valid_entry = False

        opened_list = open(f"{entry}.txt", "r")
        for line in opened_list.readlines():
            if entry == line:
                valid_entry = True
                break
        
        return valid_entry

        

    def get_dalle_result(self):
        prompt_text: str = self.form_data["prompt_text"]
        self.image_made = False
        self.image_processing = True
        # Yield here so the image_processing take effects and the circular progress is shown.
        yield
        try:
            response = get_openai_client().images.generate(
                prompt=prompt_text, n=1, size="1024x1024"
            )
            self.image_url = response.data[0].url
            self.image_processing = False
            self.image_made = True
            yield
        except Exception as ex:
            self.image_processing = False
            yield rx.window_alert(f"Error with OpenAI Execution. {ex}")

def check_if_valid(form_data: dict[str]) -> bool:
    entry: str = form_data["prompt_text"]
    '''
    Checks if user entry is valid
    by comparing to database of valid entries
    '''
    valid_entry = False

    opened_list = open(f"{entry}.txt", "r")
    for line in opened_list.readlines():
        if entry == line:
            valid_entry = True
            break
    
    return valid_entry

def generate_dalle_string(animal: str, emotion: str, location: str) -> str:
    string = f"A {emotion} {animal} that lives in {location}"
    return string

def generate_chatgtp_string(animal: str, name: str, emotion: str, location: str) -> str:
    string = f"Write a story about a {emotion} {animal} named {name} that lives in {location}"
    return string

user_inputs = {
    "animal": "Enter an animal of your choice:",
    "name": "What is the name of your animal?:",
    "emotion": "What emotion would you describe this animal having?",
    "location": "Where does this animal live?"
}
    

def get_input(question_index: int):
    return rx.center(
        rx.vstack(
            rx.heading(user_inputs.values()[question_index], font_size="1.5em"),
            rx.form(
                rx.vstack(
                    rx.input(
                        id=user_inputs.keys()[question_index],
                        placeholder="Enter here",
                        size="3",
                    ),
                    rx.button(
                        "Submit",
                        type="submit",
                        size="3",
                    ),
                    align="stretch",
                    spacing="2",
                ),
                width="100%",
                on_submit=State2.handle_submit
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
        background="radial-gradient(circle at 22% 11%,rgba(62, 180, 137,.20),hsla(0,0%,100%,0) 19%),radial-gradient(circle at 82% 25%,rgba(33,150,243,.18),hsla(0,0%,100%,0) 35%),radial-gradient(circle at 25% 61%,rgba(250, 128, 114, .28),hsla(0,0%,100%,0) 55%)",
    )


# Add state and page to the app.
app = rx.App(
    theme=rx.theme(
        appearance="light", has_background=True, radius="medium", accent_color="mint"
    ),
)

for i in range(len(user_inputs)):
    app.add_page(get_input(i), title="Component")

# at end (no errors?) 
#then plug into dalle and chatgtp 



