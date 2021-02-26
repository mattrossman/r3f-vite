import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh()],
	root: 'src',
	publicDir: '../public',
	build: {
		outDir: '../dist',
	},
	server: {
		port: 1234,
	},
})
