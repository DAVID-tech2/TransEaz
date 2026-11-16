import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      {
        name: 'copy-static-pwa-files',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) return;
          const distDir = path.resolve(__dirname, 'dist');
          if (!fs.existsSync(distDir)) return;

          const staticFiles = ['manifest.json', 'sw.js', 'offline.html', 'favicon.ico'];
          for (const file of staticFiles) {
            const src = path.resolve(__dirname, file);
            if (fs.existsSync(src)) {
              fs.copyFileSync(src, path.resolve(distDir, file));
            }
          }

          const srcAssets = path.resolve(__dirname, 'assets');
          const distAssets = path.resolve(distDir, 'assets');
          if (fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }

          if (fs.existsSync(distAssets)) {
            for (const entry of fs.readdirSync(distAssets)) {
              if (/^manifest-.*\.json$/.test(entry)) {
                fs.unlinkSync(path.join(distAssets, entry));
              }
            }
          }

          const distHtmlPath = path.resolve(distDir, 'index.html');
          if (fs.existsSync(distHtmlPath)) {
            let html = fs.readFileSync(distHtmlPath, 'utf8');
            html = html
              .replace(/href="\.\/assets\/manifest-[^"]+\.json"/g, 'href="./manifest.json"')
              .replace(/href="\.\/assets\/favicon-[^"]+\.ico"/g, 'href="./assets/icons/favicon.ico"')
              .replace(/href="\.\/assets\/favicon-[^"]+\.png"/g, 'href="./assets/icons/favicon.png"')
              .replace(/href="\.\/assets\/apple-touch-icon-[^"]+\.png"/g, 'href="./assets/icons/apple-touch-icon.png"');
            fs.writeFileSync(distHtmlPath, html, 'utf8');
          }
        },
      },
    ],
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
