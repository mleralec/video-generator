import request from 'supertest'
import app from '../src/app'

describe('app', () => {
  test('get / should return 404', async done => {
    const response = await request(app).get('/')
    expect(response.status).toBe(404)
    expect(response.body).toEqual({ error: 'Not found' })
    done()
  })

  test('get /test should return 422', async done => {
    const response = await request(app).get('/videos/test.mp4')
    expect(response.status).toBe(422)
    expect(response.body).toEqual({ error: 'The duration should be a valid number' })
    done()
  })

  test('get /0,5 should return 422', async done => {
    const response = await request(app).get('/videos/0,5.mp4')
    expect(response.status).toBe(422)
    expect(response.body).toEqual({ error: 'The duration should be a valid number' })
    done()
  })

  test('get /10 should return 200', async done => {
    const response = await request(app).get('/videos/10.mp4')
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toBe('video/mp4')
    done()
  })
})
