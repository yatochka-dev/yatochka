/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env.mjs'))

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,


    // experimental: {
    //     forceSwcTransforms: true,
    //
    //     swcPlugins: [
    //         ['next-superjson-plugin', {}]
    //     ]
    // },

    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    images: {
        domains: [
            'i.ibb.co',
            'yatochka.vercel.app'
        ]
    }
}
export default config
