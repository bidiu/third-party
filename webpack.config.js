const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:5000/',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
        use: [],
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
      'react': require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    }
  },
  devServer: {
    port: 5000,
    contentBase: path.resolve(__dirname, 'dist'),
  },
}
