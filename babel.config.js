module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@shared': './src/shared',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@translations': './src/translations',
        },
        extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js' , '.ts'],
      },
    ],
  ],
};
