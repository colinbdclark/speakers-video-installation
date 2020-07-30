fluid.defaults("colin.speakers.animatedCanvas", {
    gradeNames: "colin.speakers.canvasComponent",

    components: {
        clock: {
            type: "fluid.mustBeOverridden"
        }
    },

    invokers: {
        draw: {
            funcName: "fluid.mustBeOverridden"
        }
    },

    listeners: {
        "{clock}.events.onTick": "{that}.draw()"
    }
});

