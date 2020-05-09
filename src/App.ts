import * as express from 'express'

class App {
  public express
  
  constructor () {
    this.express = express()
    this.express.set('view engine', 'ejs')
    this.express.engine('.html', require('ejs').renderFile)
    this.mountRoutes();
  }
  
  private mountRoutes(): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.render('index.html')
    })
    
    this.express.use('/', router)
    this.express.use(express.static('static'))
  }
}

export default new App().express