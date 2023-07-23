const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'Hello Word';
});

app.listen(2333);