module.exports = {
    plugins: [
        require('postcss-cssnext'),
        require('postcss-px2rem-exclude')({
            baseDpr: 2,
            threeVersion: false,
            remVersion: true,
            remUnit: 75,
            remPrecision: 6,
            forcePxComment:'!px',
            keepComment:'!no',
            exclude: /(node_modules)|(static)/g
          }),
        ]
}