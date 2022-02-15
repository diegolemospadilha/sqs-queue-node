import AWS from 'aws-sdk'
require('dotenv').config()

AWS.config.update( { region: 'us-east-1'})

const sqs = new AWS.SQS( { apiVersion: '2012-11-05' })
const queueUrl = process.env.QUEUE_URL || ''

const params: AWS.SQS.ReceiveMessageRequest = {
    QueueUrl: queueUrl,
    MaxNumberOfMessages: 10,
    VisibilityTimeout: 30,
    WaitTimeSeconds: 0,
}

function deleteMessage(){
    sqs.receiveMessage( params, function(error, data){
        if(error)
            console.log(`Èrror: ${error}`)
        if(data && data.Messages){
            console.log(`Number of messages: ${data.Messages.length}`)

            data.Messages?.forEach(message => {
                console.log(`Message => ${JSON.stringify(message)}`)

                const deleteParams: AWS.SQS.DeleteMessageRequest = {
                    QueueUrl: queueUrl,
                    ReceiptHandle: message.ReceiptHandle || ''
                }

                sqs.deleteMessage(deleteParams, function(error: AWS.AWSError, data) {
                    if(error)
                        console.log(`Èrror: ${error}`)
                    if(data)
                        console.log(`Message deleted: ${JSON.stringify(data)}`)
                })
            })
        } else if (!data.Messages)
            console.log('No messages received.')   
    })
}

deleteMessage()
