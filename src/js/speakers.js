fluid.defaults("colin.speakers.app", {
    gradeNames: "fluid.viewComponent",

    components: {
        compositor: {
            type: "colin.speakers.compositor",
            container: "{app}.dom.stageContainer"
        }
    },

    selectors: {
        stageContainer: ".aconite-video-container",
        textCanvas: ".speakers-text-canvas"
    }
});
