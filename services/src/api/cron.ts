import cron from 'node-cron'

cron.schedule('* * * * * *', (): void => {
  console.log(new Date())
})
