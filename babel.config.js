module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "lodash",
    '@babel/plugin-proposal-optional-chaining',
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }],
    "@babel/plugin-transform-modules-commonjs",
    [
      "module-resolver",
      {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "alias": {
          "~shared": "./",
          "~styles": "./styles",
          "~components": "./component",
          "~test-helpers": "./test-helpers",
          "#": "./__js_test_config"
        }
      }
    ],
  ],
  "env": {
    "development": {
      "plugins": [
        [
          "babel-plugin-styled-components",
          {
            "fileName": false
          }
        ]
      ]
    },
    "test": {
      "plugins": ["@babel/plugin-transform-runtime"]
    },
    "production": {
      "plugins": [
        "lodash",
        [
          "styled-components",
          {
            "displayName": false
          }
        ]
      ]
    }
  }
};