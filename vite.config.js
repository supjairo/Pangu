import {fileURLToPath, URL} from 'node:url'
import pagesPlugin from "vite-plugin-pages";

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), pagesPlugin(),
        AutoImport({
            resolvers: [],
        }),
        Components({
            resolvers: [],
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
