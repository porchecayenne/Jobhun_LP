const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MODE = "development";

const enabledSourceMap = MODE === "development";

module.exports = {
    mode: MODE,
    devServer: {
        contentBase: "dist",
        open: true
    },
    entry: "./src/index.js",
    // 出力ファイル
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss/,
            use: [
                // CSSファイルを書き出すオプションを有効にする
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                // CSSを読み込む
                {
                    loader: "css-loader",
                    options: {
                        url: false,
                        sourceMap: enabledSourceMap,
                        importLoaders: 2
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        // ソースマップの利用有無
                        sourceMap: enabledSourceMap
                    },
                },
            ],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
};