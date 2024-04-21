import reflex as rx


def newpage(State):

    """New Page"""
    image_url = State.image_url
    story = State.story
    real_image = State.real_image_url
    facts = State.facts
    
    return rx.center(
        rx.vstack(
            rx.vstack(
                rx.heading(f"{State.name} the {State.animal}!"),
                rx.hstack(rx.image(src=image_url, width="20vw", height="auto"),
                rx.box(rx.text(story,
                font_weight="bold",
                font_size="1.5em"))),
                bg="white",
                padding_x="5em",
                padding_y="2em",
                border_radius="25px",
                align_items="left",
                overflow="auto",
            ),
            rx.vstack(
                rx.heading(f"Facts about {(State.animal).lower()}s!"),
                rx.hstack(rx.image(src=real_image, width="20vw", height="auto"),
                rx.box(rx.text(facts,
                font_weight="bold",
                font_size="1.5em"))),
                bg="#29F2C2",
                padding_x="5em",
                padding_y="2em",
                border_radius="25px",
                align_items="left",
                overflow="auto",
            ),
        ),
        padding="1em",
        height="100vh",
        align_items="top",
        bg="#1B5E3A",
        overflow="auto",
    )
