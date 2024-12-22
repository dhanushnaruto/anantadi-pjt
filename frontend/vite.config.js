import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/', // Ensure this matches your deployment base path
    build: {
        outDir: 'dist', // Ensure this matches your deployment directory
    },
});
