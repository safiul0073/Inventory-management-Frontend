module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    content: [
        'node_modules/tv-*/dist/tv-*.umd.min.js',
    ]
}