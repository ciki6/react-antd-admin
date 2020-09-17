const CracoLessPlugin = require('craco-less');
const MiniCssExtractPlugin =require("mini-css-extract-plugin")
const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
    webpack: {
        //配置路径别名
        alias: {
            '@': pathResolve('src'),
        }
    },
    babel: {
        //配置antd按需加载
        plugins: [
            ['import', { libraryName: 'antd', style: true }],
            ['@babel/plugin-proposal-decorators', { legacy: true }]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                //配置less-loader
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {'@primary-color': '#1DA57A'},
                        javascriptEnabled: true,
                    },
                },
            },
        },{
            plugin: MiniCssExtractPlugin,
            options: {
                ignoreOrder: true
            }
        }
    ],
};