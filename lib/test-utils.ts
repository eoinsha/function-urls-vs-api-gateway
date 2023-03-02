import { type APIGatewayProxyEvent, type Context } from 'aws-lambda'

// Exports mock lambda event, context, and callback objects for use in tests

export const event: APIGatewayProxyEvent = {
  body: null,
  headers: {
    'Content-Type': 'application/json'
  },
  multiValueHeaders: {
    'Accept-Encoding': ['gzip', 'deflate', 'br'],
    Connection: ['keep-alive'],
    Accept: ['*/*'],
    'User-Agent': ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36']
  },
  httpMethod: '',
  isBase64Encoded: false,
  path: '',
  pathParameters: null,
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  stageVariables: null,
  requestContext: {
    accountId: '',
    apiId: '',
    authorizer: null,
    domainName: '',
    domainPrefix: '',
    extendedRequestId: '',
    httpMethod: '',
    identity: {
      accessKey: null,
      accountId: null,
      apiKey: null,
      apiKeyId: null,
      caller: null,
      clientCert: null,
      cognitoAuthenticationProvider: null,
      cognitoAuthenticationType: null,
      cognitoIdentityId: null,
      cognitoIdentityPoolId: null,
      principalOrgId: null,
      sourceIp: '',
      user: null,
      userAgent: null,
      userArn: null
    },
    path: '',
    protocol: '',
    requestId: '',
    requestTime: '',
    requestTimeEpoch: 0,
    resourceId: '',
    resourcePath: '',
    stage: ''
  },
  resource: '/users'
}

export const context: Context = {
  callbackWaitsForEmptyEventLoop: false,
  functionName: 'lambda-test',
  functionVersion: '',
  invokedFunctionArn: '',
  memoryLimitInMB: '',
  awsRequestId: '',
  logGroupName: '',
  logStreamName: '',
  getRemainingTimeInMillis: (): number => 0,
  done: (error, result) => {
    console.log('Mock done callback called.')
    if (error != null) {
      console.error(error)
    }
    console.log(result)
  },
  fail: (error) => {
    console.log('Mock fail callback called.')
    console.error(error)
  },
  succeed: (result) => {
    console.log('Mock succeed callback called.')
    console.log(result)
  }
}
