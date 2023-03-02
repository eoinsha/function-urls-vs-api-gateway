import tap from 'tap'
import { apiHandler } from '../app'
import { event, context } from '../../lib/test-utils'

void tap.test('Lambda function returns the correct message', async (t) => {
  const lambdaResponse = await apiHandler(event, context)
  t.equal(lambdaResponse.statusCode, 200)
  const responseBody = JSON.parse(lambdaResponse.body)
  t.ok(responseBody.message)
  t.end()
})
