fluid.defaults("colin.speakers.textCanvas", {
    gradeNames: "colin.speakers.animatedCanvas",

    model: {
        text: "A spectre is haunting the world—the spectre of software.",
        backgroundColor: "#000",
        color: "#fff",
        font: "2em Helvetica",
        letterSpacing: "0.125em",
        textX: Math.floor(Math.random() * 1280),
        textY: Math.floor(Math.random() * 720)
    },

    components: {
        clock: "{compositor}.clock"
    },

    invokers: {
        draw: {
            funcName: "colin.speakers.textCanvas.draw",
            args: ["{that}"]
        }
    },

    listeners: {
        "onReady.renderText": {
            priority: "after:fillBackground",
            func: "{that}.draw",
            args: ["{that}"]
        }
    }
});

colin.speakers.textCanvas.draw = function (that) {
    that.fillBackground();
    that.context.fillStyle = that.model.color;
    that.context.font = that.model.font;
    that.context.fillText(that.model.text,
        that.model.textY,
        that.model.textX);
};
