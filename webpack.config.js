const path = require('path')

module.exports = {
  // Entry point for the application
  entry: './src/index.js', // Modify this based on your entry file

  // Output configuration
  output: {
    filename: 'bundle.js', // The output filename for bundled code
    path: path.resolve(__dirname, 'dist'), // Path where the output will be saved
  },

  // Module configuration to define how different types of files are processed
  module: {
    rules: [
      {
        test: /\.js$/, // For JavaScript files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: 'babel-loader', // Transpile JavaScript files using Babel
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  // Additional configuration (optional)
  resolve: {
    extensions: ['.js', '.jsx'], // Define which file extensions to resolve
  },

  // Development server configuration (optional)
  devServer: {
    contentBase: './dist', // Serve files from the dist folder
    port: 3000, // Server will run on http://localhost:3000
  },
  externals: {
    systemjs: 'System', // Use SystemJS as a global variable
  },
}
