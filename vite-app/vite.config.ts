import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: tag => tag.includes('-'),
				},
			},
		}),
		dts({ include: './src/web-components.ts' }),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	build: {
		lib: {
			entry: 'src/web-components.ts',
			formats: ['es'],
			fileName: format => `web-components.${format}.js`,
		},
		minify: false,
		target: 'esnext',
		sourcemap: true,
		emptyOutDir: true,
		copyPublicDir: true,
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
})
