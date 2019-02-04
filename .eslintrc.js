module.exports = {
    extends: ['airbnb'],
    // "parser": 'babel-eslint',
    rules: {
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    },
    plugins: ['import', 'react'],
    env: {
        browser: true,
        node: true
    }

};