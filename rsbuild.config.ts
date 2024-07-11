import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {pluginSass} from '@rsbuild/plugin-sass';
import {pluginTypeCheck} from '@rsbuild/plugin-type-check';

export default defineConfig(({envMode}) => ({
    plugins: [pluginReact(), pluginSass(), pluginTypeCheck()],
    html: {
        template: './public/index.html',
    },
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                changeOrigin: true,
            },
        },
    },
}));