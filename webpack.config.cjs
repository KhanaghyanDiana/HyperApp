const path  = require("path")

module.exports={
    entry: "./pugCode/index.js",
    target: "web",
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/, // Exclude node_modules directory
                use: {
                    loader: 'babel-loader', // Use babel-loader to transpile JavaScript files
                    options: {
                        presets: ['@babel/preset-env'], // Use @babel/preset-env for transpiling modern JavaScript syntax
                    },
                },
            },
        ],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

}