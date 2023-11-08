const path = require("path")
const webpack = require("webpack")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  devtool: "inline-source-map",

  // メインのJS
  entry: {
    scripts: "../../../dev/frontend/src/js/bundle.js"
  },

  // 出力ファイル
  output: {
    path: path.resolve(__dirname, "./../../../dist"),
    filename: "bundle.js"
  },

  resolve: {
    modules: [__dirname, "node_modules"],
    alias: {
      "~": path.resolve(__dirname, "../../../dev/frontend/src/js"),
      vue: path.resolve(
        __dirname,
        "node_modules",
        "vue/dist/vue.esm-bundler.js"
      )
    },
    extensions: [".vue", ".js", ".ts"]
  },

  module: {
    rules: [
      {
        // vueのloader設定
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ]
            }
          }
        ]
      },
      /*{
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
          configFile: path.resolve(__dirname, './tsconfig.json')
        }
      }*/
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    })
  ]
}
