const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// webpack配置信息
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',

    // 指定打包文件所在目录 
    output: {
        // 指定目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件名
        filename: "bundle.js",
        // 告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },

    // 指定webpack打包时使用的模块
    module: {
        // 指定加载的规则
        rules: [
            {
                // test指定规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        targets: {
                                            // 要兼容的目标浏览器
                                            "chrome": "88"
                                        },
                                        // 指定corejs版本
                                        "corejs": "3",
                                        // 使用corejs方式，“usage”变送hi按需加载
                                        "useBuiltIns": "usage"

                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new HtmlWebpackPlugin({
            title: "自定义title",
            template: './src/index.html',
        }),
        // 自动清除dist下的文件
        new CleanWebpackPlugin()
    ],

    // 用来设置引用的模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}