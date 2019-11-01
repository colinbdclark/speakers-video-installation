fluid.defaults("colin.speakers.readyableComponent", {
    gradeNames: "fluid.modelComponent",

    model: {
        isReady: false
    },

    events: {
        onReady: null
    },

    invokers: {
        isReady: {
            funcName: "colin.speakers.readyableComponent.isReady",
            args: ["{that}"]
        }
    },

    listeners: {
        "onReady.updateModel": {
            changePath: "isReady",
            value: true
        }
    }
});

colin.speakers.readyableComponent.isReady = function (that) {
    return that.model.isReady;
};
