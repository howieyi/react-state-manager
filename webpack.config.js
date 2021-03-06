const path = require("path");

module.exports = {
  mode: "development",

  devtool: "inline-source-map",

  entry: {
    redux: "./src/redux/index.jsx",
    mobx: "./src/mobx/index.jsx",
  },

  devServer: {
    contentBase: path.join(__dirname, "src"),
    // compress: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              [
                "@babel/plugin-proposal-decorators",
                {
                  legacy: true,
                },
              ],
              [
                "@babel/plugin-proposal-class-properties",
                {
                  loose: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
