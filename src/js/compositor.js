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

        compositableText: {
            type: "colin.speakers.compositableText"
        }
    },

    listeners: {
        onLayersReady: {
            "this": "console",
            method: "log",
            args: "compositor layers are ready"
        }
    }
});
