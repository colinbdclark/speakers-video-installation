fluid.defaults("colin.speakers.canvasComponent", {
    gradeNames: [
        "colin.speakers.readyableComponent",
        "fluid.viewComponent"
    ],

    model: {
        backgroundColor: "#fff",
        letterSpacing: "0em"
    },

    members: {
        context: {
            expander: {
                funcName: "colin.speakers.canvasComponent.get2DContext",
                args: ["{that}.container.0"]
            }
        },

        element: "{that}.container.0"
    },

    invokers: {
        fillBackground: {
            funcName: "colin.speakers.canvasComponent.fillBackground",
            args: ["{that}"]
        }
    },

    modelListeners: {
        letterSpacing: {
            namespace: "setCanvasLetterSpacing",
            funcName: "colin.speakers.canvasComponent.setLetterSpacing",
            args: ["{that}.container.0", "{change}.value"]
        }
    },

    listeners: {
        "onCreate.fillBackground": "{that}.fillBackground()",

        "onCreate.fireReady": {
            priority: "last",
            func: "{that}.events.onReady.fire"
        }
    }
});

colin.speakers.canvasComponent.get2DContext = function (canvas) {
    return canvas.getContext("2d");
};

colin.speakers.canvasComponent.fillBackground = function (that) {
    that.context.fillStyle = that.model.backgroundColor;
    that.context.fillRect(0, 0,
        that.container[0].width, that.container[0].height);
};

colin.speakers.canvasComponent.setLetterSpacing = function (canvas, spacing) {
    canvas.style.letterSpacing = spacing;
};
