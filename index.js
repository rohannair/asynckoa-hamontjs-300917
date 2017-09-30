const Koa = require('koa')
const app = new Koa()

// Middleware Functions
app.use(async (ctx, next) => {
  const start = Date.now()

  await next()

  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// "Controller"
app.use(async ctx => {
  ctx.body = {
    message: `Hello world! ${ctx.url}`,
  }
})

app.listen(3000, err => {
  if (err) console.error(err)
  console.log(`===================`)
  console.log(`🚀  App is working`)
  console.log(`===================\n`)
})
