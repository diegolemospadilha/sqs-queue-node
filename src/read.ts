import {SQS, AWSError, config} from 'aws-sdk'
require('dotenv').config()

config.update( { region: 'us-east-1' })

const sqs = new SQS( { apiVersion: '2012-11-05'} )
const queueUrl = process.env.QUEUE_URL || ''

const params: AWS.SQS.ReceiveMessageRequest = {
    QueueUrl: queueUrl,
    MaxNumberOfMessages: 10,
    VisibilityTimeout: 10,
}

sqs.receiveMessage(params, function(error: AWSError, data: SQS.ReceiveMessageResult){
    if(error)
      console.log(`Error: ${error}`)

    if(data.Messages) 
      console.log(`Success: ${JSON.stringify(data.Messages)}`)
})
