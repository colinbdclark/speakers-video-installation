fluid.defaults("colin.speakers.compositor", {
    gradeNames: [
        "aconite.compositor.withPlayButton"
    ],

    fps: 60,

    uniformModelMap: {

    },

    model: {

    },

    components: {
        glRenderer: {
            type: "colin.speakers.glRenderer"
        },

        clock: {
            options: {
                listeners: {
                    "onTick.modulatePosition": {
                        func: "{textPositionModulator}.generate"
                    }
                }
            }
        },

        compositableText: {
            type: "colin.speakers.compositableText",
            options: {
                model: {
                    textX: "{textPositionModulator}.model.value",
                    textY: "{textPositionModulator}.model.value"
                }
            }
        },

        textPositionModulator: {
            type: "colin.speakers.textPositionModulator"
        }
    }
});
