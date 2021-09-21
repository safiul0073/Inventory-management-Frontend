export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'InventoryFrontend',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [

            { rel: 'stylesheet', href: 'https://afeld.github.io/emoji-css/emoji.css' },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css' }
        ]
    },
    publicRuntimeConfig: {
        axios: {
            baseURL: "http://localhost:8000"
        }
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    router: {
        // linkActiveClass: 'active-link',
        linkExactActiveClass: 'exact-active-link'
    },
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth-next', ['nuxt-tailvue', { modal: true }],
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        proxy: true,
        credentials: true,
        baseURL: "http://localhost:8000",
    },

    proxy: {
        '/api': {
            target: process.env.API_URL,
            pathRewrite: { '^/api': '/' }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    auth: {
        strategies: {
            'laravelJWT': {
                provider: 'laravel/jwt',
                url: 'http://localhost:8000',
                endpoints: {
                    login: {
                        url: '/api/login'
                    },
                    logout: {
                        url: '/api/logout'
                    },
                    user: {
                        url: '/api/me'
                    },
                    refresh: {
                        url: '/api/refresh'
                    },

                },
                token: {
                    maxAge: 60 * 60 // same as ttl but in seconds
                },
                refreshToken: {
                    maxAge: 20160 * 60 // same as refresh_ttl but in seconds
                },
                redirect: {
                    login: 'auth/login',
                    logout: 'auth/login',
                    home: '/',

                },
            },

        }
    },
}