const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router
  .all('/', async ctx => {
    ctx.body = {
      message: `Hello world! ${ctx.url}`,
    }
  })
  .all('/hi', async ctx => {
    ctx.body = {
      message: `Hi world!`,
    }
  })

app.use(async (ctx, next) => {
  const start = Date.now()

  await next()

  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(router.routes())

app.listen(3000, err => {
  if (err) console.error(err)
  console.log(`===================`)
  console.log(`🚀  App is working`)
  console.log(`===================\n`)
})
