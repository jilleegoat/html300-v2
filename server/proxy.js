import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'https://sba.gov/api/content',
  changeOrigin: true,
  pathRewrite: {
    '^/api/': '/', // rewrite path
  },
});
