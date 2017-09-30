const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.all('/', async ctx => {
  // console.log('REQUEST', ctx.request)
  console.log('RESPONSE BEFORE BODY\n', ctx.response, '\n')
  ctx.body = {
    message: `Hello world! ${ctx.url}`,
  }
  console.log('RESPONSE AFTER BODY\n', ctx.response, '\n')
})

app
  .use(async (ctx, next) => {
    console.log('RESPONSE BEFORE CONTROLLER\n', ctx.response, '\n')
    await next()
    console.log('RESPONSE AFTER CONTROLLER\n', ctx.response, '\n')
  })
  .use(router.routes())

app.listen(3000, err => {
  if (err) console.error(err)
  console.log(`===================`)
  console.log(`🚀  App is working`)
  console.log(`===================\n`)
})
