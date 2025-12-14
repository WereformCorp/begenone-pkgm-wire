{
"name": "@begenone/pkgm-wire",
"version": "1.0.0",
"private": true,
"main": "dist/index.js",
"peerDependencies": {
"@expo/vector-icons": "_",
"react": "_",
"react-native": "_"
},
"scripts": {
"build": "babel src --out-dir dist --extensions .js,.jsx"
},
"dependencies": {
"@begenone/pkgm-channel": "workspace:_",
"@begenone/pkgm-settings": "workspace:_",
"@begenone/pkgm-shared": "workspace:_",
"@begenone/pkgm-video": "workspace:_",
"@begenone/pkgm-wire": "workspace:_",
"expo-image-picker": "^17.0.8",
"expo-video-thumbnails": "^10.0.7"
},
"devDependencies": {
"@babel/cli": "^7.28.3",
"@babel/core": "^7.28.5",
"@babel/preset-env": "^7.28.5",
"metro-react-native-babel-preset": "^0.77.0"
}
}
