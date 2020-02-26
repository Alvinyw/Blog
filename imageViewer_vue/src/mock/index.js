import Mock from 'mockjs'
import app from './app'

const data = [].concat(app)

data.forEach(function (res) {
  Mock.mock(res.path, res.data)
})

export default Mock