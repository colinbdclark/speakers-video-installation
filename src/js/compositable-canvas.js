// TODO: Move to Aconite.
fluid.defaults("colin.speakers.compositableCanvas", {
    gradeNames: "aconite.compositable",

    members: {
        element: "{that}.container.0"
    },

    components: {
        source: {
            type: "colin.speakers.canvasComponent",
            options: {
                // TODO: wtf why?
                listeners: {
                    onReady: {
                        func: "{compositableCanvas}.events.onReady.fire"
                    }
                }
            }
        }
    },

    events: {
        onReady: null
    }
});
