const storyImgs = {
    northImg: {
        left: "turn-left-4",
        right: "turn-right-4",
        src: "assets/images/forest-edge-n.png",
        alt: "The edge of a forest - north",
        title: "The forest continues to the north, trees thick ahead of you",
        text: "The trees are thick ahead of you. You don't see a clear way through.",
        next_left: "turn-left-1",
        next_right: "turn-right-1"
    },
    eastImg: {
        left: "turn-left-3",
        right: "turn-right-1",
        src: "assets/images/forest-edge-e.png",
        alt: "The edge of a forest - east",
        title: "The forest continues to the east, a slight worn-down path just about visible",
        text: "To the east, the trees continue. After a moment, you notice a slight worn-down path just about visible between them.",
        next_left: "turn-left-4",
        next_right: "turn-right-2"
    },
    southImg: {
        left: "turn-left-2",
        right: "turn-right-2",
        src: "assets/images/forest-edge-s.png",
        alt: "The edge of a forest - south",
        title: "The forest ends to the south, opening onto the empty field where you started",
        text: "Turning to the south, you can see through the trees to the empty field where you started. No point going back there.",
        next_left: "turn-left-3",
        next_right: "turn-right-3"
    },
    westImg: {
        left: "turn-left-1",
        right: "turn-right-3",
        src: "assets/images/forest-edge-w.png",
        alt: "The edge of a forest - west",
        title: "The forest continues to the west, a small river glinting between the trees",
        text: "To the west, the trees continue. You can make out a small river winding through them.",
        next_left: "turn-left-2",
        next_right: "turn-right-4"
    }
};

export {storyImgs};