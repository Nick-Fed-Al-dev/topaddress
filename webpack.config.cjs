const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")

const env = process.env.NODE_ENV

const isDev = env === "development"
const isProd = env === "production"

function optimization() {

    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

function filename(extension) {

    if(isDev) {
        return `[name].${extension}`
    }

    return `[name].[hash].${extension}`
}

function cssLoaders(extra) {

    const loaders = [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                url: true
            }
        },
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

function babelOptions(preset) {

    const options = {
        presets: [
            "@babel/preset-env",
        ],
        plugins: [
            "@babel/plugin-proposal-class-properties"
        ]
    }

    if (preset) {
        options.presets.push(preset)
    }

    return options
}

function jsLoaders() {

    const loaders = [{
        loader: "babel-loader",
        options: babelOptions()
    }]

    return loaders
}

function plugins() {

    const pluginArray = [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            minify: {
                collapseWhitespace: isProd
            },
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ]

    if(isProd) {
        pluginArray.push(new BundleAnalyzerPlugin())
    }

    return pluginArray
}

const webpackConfig = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: ["@babel/polyfill", "./index.jsx"],
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: (pathData) => {
            const filepath = path
                .dirname(pathData.filename)
                .split("/")
                .slice()
                .join("/")
            return `${filepath}/[name].[hash][ext][query]`
        }
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
            "assets": path.resolve(__dirname, "src/assets")
        }
    },
    optimization: optimization(),
    devServer: {
        historyApiFallback: true,
        port: 7720,
        hot: isDev,
    },
    devtool: isDev ? "source-map" : "nosources-source-map",
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                type: "asset/resource",
            },
            {
                test: /\.(ttf|otf|woff|woff2|eot)$/,
                type: "asset/resource"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [{
                    options: babelOptions('@babel/preset-react'),
                    loader: 'babel-loader'
                }]
            }
        ]
    }
}

module.exports = webpackConfig