const express = require('express');
const cors = require('cors')
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(cors())
app.use('/', createProxyMiddleware({ target: 'https://raspberry-pi-api.azurewebsites.net/test/', changeOrigin: true }));
app.listen(8080);

