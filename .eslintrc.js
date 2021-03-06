module.exports = {
    "extends": ["airbnb", "plugin:jest/recommended"],
    "env": {
        "browser": true,
        "node": true,
    },
    "globals": {
        "API_URL": false
    },
    "parser": "babel-eslint",
    "rules": {
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "linebreak-style": "off",
        "no-underscore-dangle": ["error", {
            "allow": [
                "__PRELOADED_STATE__",
                "__REDUX_DEVTOOLS_EXTENSION__",
                "_id",
            ]
        }],
        "no-nested-ternary": 0,
        "brace-style": ["error", "stroustrup"],
        
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/prop-types": 0,
        "react/no-array-index-key": 0,
        "react/destructuring-assignment": [1, "always"],
        "react/no-did-update-set-state": 1,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

        "import/no-unresolved": 0,
        "import/extensions": 0,
        "import/prefer-default-export": 0,
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    },
};