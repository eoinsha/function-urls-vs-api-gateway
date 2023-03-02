import {
  type APIGatewayProxyEventV2,
  type APIGatewayProxyResultV2,
  type APIGatewayProxyEvent,
  type APIGatewayProxyResult, type Context
} from 'aws-lambda'
import { middify } from '../lib/lambda-common'

export const apiHandler = middify(async (event: APIGatewayProxyEvent | APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyResult | APIGatewayProxyResultV2> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello from ${context.functionName}` })
  }
})
