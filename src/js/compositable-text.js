fluid.defaults("colin.speakers.compositableText", {
    gradeNames: "colin.speakers.compositableCanvas",

    members: {
        gl: "{compositor}.glRenderer.gl"
    },

    components: {
        source: {
            type: "colin.speakers.textCanvas",
            container: "{app}.dom.textCanvas",
            options: {
                model: "{compositableText}.model"
            }
        }
    }
});
