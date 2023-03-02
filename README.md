# Function URLs vs API Gateway (REST and HTTP API)

This repository contains an AWS SAM application that deploys a Lambda function with an API using three different deployment options:
1. API Gateway REST API
2. API Gateway HTTP
3. Lambda Function URLs.

The goal of this project is to provide a quick and easy way to compare the three options and help you choose the best one for your use case.

## Prerequisites

Before you can deploy the application, you'll need to have the following installed:

- AWS SAM CLI
- AWS CLI
- Node.js

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Run `sam build`
4. Deploy the application using the `sam deploy --guided` command.
5. Test the URLs output by the SAM CLI.

