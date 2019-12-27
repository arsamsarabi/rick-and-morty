import 'dotenv/config'
import './database/connection'
import cron from 'node-cron'
import { seed } from './api'

seed()

cron.schedule('* * * * * 2', (): void => {
  seed()
})
