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
					// Treat all tags with a dash as custom elements
					isCustomElement: tag => tag.includes('-'),
				},
			},
		}),
		// Vite plugin for compiling typescript d.ts files
		dts({ include: './src/web-components.ts' }),
	],
	// Configuration '@' aliases for imports
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	// Configuration options for building in Vite library mode
	build: {
		lib: {
			entry: 'src/web-components.ts',
			name: 'intervue-wc',
			formats: ['es', 'umd'],
			fileName: format => `web-components.${format}.js`,
		},
		minify: false,
		target: 'esnext',
		sourcemap: true,
		emptyOutDir: true,
		copyPublicDir: true,
		rollupOptions: {
			external: ['vue', 'vue-i18n', 'tilewindcss'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
})
