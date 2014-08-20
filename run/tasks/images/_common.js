module.exports = {
    srcPaths: ['./img/**/*'],

    destPath: './img-min/',

    svgoPlugins: [
        { removeViewBox: false },
        { removeUselessStrokeAndFill: false },
        { convertPathData: { straightCurves: false } }
    ]

}