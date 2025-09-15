import request from '../request'

export function getTestData() {
  return request('/todos/1', {}, { method: 'GET' })
}
