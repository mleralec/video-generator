import path from 'path'
import fs from 'fs'
import express from 'express'
import videoshow from 'videoshow'

const app = express()

app.use('/videos/:duration.mp4', (req, res) => {
  const { duration } = req.params
  const videoPath = `public/videos/${duration}.mp4`

  if (!Number.isInteger(Number(duration))) {
    return res.status(422).json({ error: 'The duration should be a valid number' })
  }

  if (fs.existsSync(videoPath)) {
    return res.sendFile(path.resolve(videoPath))
  }

  const config = {
    path: 'public/image.png',
    caption: `Time of this video: ${duration}sec`,
    captionDelay: 0,
    fps: 1,
    loop: Number(duration),
  }

  videoshow([config])
    .save(`public/videos/${duration}.mp4`)
    .on('error', (error: Error) => res.status(500).json({ error }))
    .on('end', () => res.sendFile(path.resolve(videoPath)))
})

app.use('*', (_req, res) => res.status(404).json({ error: 'Not found' }))

export default app
