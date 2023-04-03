import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import visualizer from 'rollup-plugin-visualizer'
import { minify } from 'html-minifier'
import ViteImages from 'vite-plugin-vue-images'

const prod = process.env.NODE_ENV === 'production'

require('dotenv-flow').config({
    node_env: process.env.NODE_ENV || 'development',
})

const apiPrefix = `${process.env.ROOT || '/'}api`
const apiRegexp = new RegExp(`^${apiPrefix}`)

const minimizeIndex = () => {
    return {
        name: 'html-transform',
        transformIndexHtml(html) {
            return minify(html, {
                collapseWhitespace: true,
            })
        },
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    'page-header-padding-left': '16px',
                    'page-header-padding-vertical': '8px',
                },
            },
        },
    },
    optimizeDeps: {
      exclude: ['@jiaminghi/c-render']
    },
    plugins: [
        vue(),
        AutoImport({ imports: 'vue' }), //省略import
        Pages(), //路由入口
        Layouts(), //路由出口
        Components({
            //组件按需加载
            directoryAsNamespace: true,
            resolvers: [
                ArcoResolver({
                    //字节组件库arco
                    importStyle: 'less',
                    resolveIcons: true,
                }),
                IconsResolver(), //图标库
            ],
        }),
        ViteImages(
                {
                dirs: ['src/assets/image'] // 指明图片存放目录 图片懒加载
            }
        ),
        Icons(), //图标库
        WindiCSS(), //样式类库
        prod && minimizeIndex(),
        prod && visualizer({ brotliSize: true }),
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },

    server: {
        // port: process.env.PORT || 3000,
        proxy: {
            [apiPrefix]: {
                target: `http://${process.env.API_SERVER}`,
                rewrite: path => path.replace(apiRegexp, ''),
            },
        },
    },
})
