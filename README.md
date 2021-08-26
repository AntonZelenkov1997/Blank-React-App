# Blank-React-App
Blank React App with dependencies

## Installation

Install React и react-dom

```sh
yarn add react react-dom react-router-dom
```

Install babel-presets

```sh
yarn add @babel/core @babel/preset-env @babel/preset-react -D
```

In .babelrc need to add

```sh
{
  "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
   ]
}
```

Install Webpack with dependencies

```sh
yarn add webpack webpack-cli babel-loader css-loader style-loader html-webpack-plugin sass-loader sass postcss-scss -D
```

Install Normalize.css

```sh
yarn add normalize.css -D
```

Install scoped css/scss for React

```sh
yarn add @dr.pogodin/babel-plugin-react-css-modules -D
```

Don't forget to set ```localIdentName``` in ```css-loader``` and ```generateScopedName``` in ```.babelrc```. ```localIdentName``` and ```generateScopedName``` must be the same!
Example for supporting scss:

```sh
   "plugins": [
    [
      "@dr.pogodin/babel-plugin-react-css-modules",
      {
        "filetypes": {
          ".scss": {
            "syntax": "postcss-scss"
          }
        },
        "generateScopedName": "[local]--[hash:base64:5]"
      }
    ]
  ]
```

## Setup Typescript

Install Typescript and types

```sh
yarn add typescript @types/react @types/react-dom -D
```

Download Babel-preset for typescript

```sh
yarn add @babel/preset-typescript -D
```

Download ts-loader for Webpack

```sh
yarn add ts-loader -D
```

Add to webpack.config.js in rules this:

```sh
{ test: /\.tsx?$/, loader: "ts-loader" }
```

And in resolve add this extensions:

```sh
  resolve: {
    extensions: ['', '.js', '.jsx', ".ts", ".tsx"],
  }
```

Create tsconfig.json. Add this:

```sh
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": false,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```

