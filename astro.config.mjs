// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    fonts: [
        {
            provider: fontProviders.google(),
            name: 'Plus Jakarta Sans',
            cssVariable: '--font-plus-jakarta-sans',
            weights: [400, 500, 600, 700, 800],
            styles: ['normal'],
        },
        {
            provider: fontProviders.google(),
            name: 'JetBrains Mono',
            cssVariable: '--font-jetbrains-mono',
            weights: [400, 500, 700],
            styles: ['normal'],
        },
    ],
});