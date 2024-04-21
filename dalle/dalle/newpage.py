import reflex as rx


def newpage(State):

    """New Page"""
    image_url = State.image_url
    story = State.story
    
    return rx.center(
        rx.vstack(
            rx.heading("Results"),
            rx.image(src=image_url, width="20vw", height="auto"),
            rx.divider(),
            rx.box(rx.text(story,
            font_weight="bold",
            font_size="1em")),
            bg="white",
            padding_x="5em",
            padding_y="2em",
            border_radius="25px",
            align_items="left",
            overflow="auto",
        ),
        padding="1em",
        height="100vh",
        align_items="top",
        bg="#ededed",
        overflow="auto",
    )
