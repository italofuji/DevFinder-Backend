import express from 'express'
import cors from 'cors'

class App {
  public server: express.Application

  public constructor () {
    this.server = express()
    this.middleware()
  }

  private middleware (): void {
    this.server.use(express.json())
    this.server.use(cors())
  }
}

export default new App().server
