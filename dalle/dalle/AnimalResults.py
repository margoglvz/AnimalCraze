import reflex as rx
import random

def AnimalResults():
    """The main view."""
    return rx.center(
        rx.vstack(
            rx.heading("Test"),
        ),
        padding_y="5em",
        font_size="2em",
        text_align="center",
    )
