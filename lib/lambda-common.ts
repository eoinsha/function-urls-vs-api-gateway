import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import { type APIGatewayProxyEvent, type Context } from 'aws-lambda'
import { Logger, injectLambdaContext } from '@aws-lambda-powertools/logger'
import { Metrics, logMetrics } from '@aws-lambda-powertools/metrics'
import { Tracer, captureLambdaHandler } from '@aws-lambda-powertools/tracer'

// Exported powertools instances for use anywhere within a Lambda function implementation
export const logger = new Logger()
export const tracer = new Tracer()
export const metrics = new Metrics()

type MiddyHandler = (event: APIGatewayProxyEvent, context: Context) => Promise<any>

export const middify = (handler: MiddyHandler): MiddyHandler => {
  return middy(handler)
    .use(httpErrorHandler())
    .use(injectLambdaContext(logger, { logEvent: true }))
    .use(logMetrics(metrics, { captureColdStartMetric: true }))
    .use(captureLambdaHandler(tracer))
}
