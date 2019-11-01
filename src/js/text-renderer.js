fluid.defaults("colin.speakers.textRenderer", {
    gradeNames: [
        "colin.speakers.canvasComponent"
    ],

    model: {
        text: "A spectre is haunting Europe—the spectre of communism.",
        backgroundColor: "#000",
        color: "#fff",
        font: "3em Helvetica",
        letterSpacing: "0.125em"
    },

    invokers: {
        render: {
            funcName: "colin.speakers.textRenderer.render"
        }
    },

    listeners: {
        "onReady.renderText": {
            priority: "after:fillBackground",
            func: "{that}.render",
            args: ["{that}"]
        }
    }
});

colin.speakers.textRenderer.render = function (that) {
    that.context.fillStyle = that.model.color;
    that.context.font = that.model.font;
    that.context.fillText(that.model.text,
        Math.random() * that.container[0].width,
        Math.random() * that.container[0].height);
};
