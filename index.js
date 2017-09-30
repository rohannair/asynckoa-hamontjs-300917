const Koa = require('koa')
const app = new Koa()

// Middleware Functions
app.use(async (ctx, next) => {
  const start = Date.now()
  // console.log('Before the controller')
  await next()
  // console.log('After the controller')

  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// "Controller"
app.use(async ctx => {
  // console.log('In the controller')
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
