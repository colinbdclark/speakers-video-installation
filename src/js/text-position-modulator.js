fluid.defaults("colin.speakers.textPositionModulator", {
    gradeNames: ["flock.synth.frameRate", "flock.modelSynth"],

    fps: "{compositor}.options.fps",

    model: {
        value: 0
    },

    synthDef: {
        ugen: "flock.ugen.lfNoise",
        inputs: {
            freq: 15,
            mul: 360,
            add: 360,
        }
    }
});
