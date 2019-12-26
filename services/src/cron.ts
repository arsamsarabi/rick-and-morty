import 'dotenv/config'
import './database/connection'
import cron from 'node-cron'
import { seed } from './api'

// cron.schedule('* * * * * 2', (): void => {
seed()
// })
