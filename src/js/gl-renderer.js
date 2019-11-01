fluid.defaults("colin.speakers.glRenderer", {
    gradeNames: "aconite.glRenderer",

    shaders: {
        fragment: "src/shaders/speakers.frag",
        vertex: "node_modules/aconite/src/shaders/stageVertexShader.vert"
    },

    uniforms: {

    }
});
