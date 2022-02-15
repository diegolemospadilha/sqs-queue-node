import AWS from 'aws-sdk'
require('dotenv').config()

AWS.config.update({ region: 'us-east-1' })

const sqs = new AWS.SQS( { apiVersion: '2012-11-05' } )
const queueUrl = process.env.QUEUE_URL || ''

console.log('queueUrl ', queueUrl)

const sendSQS = function(){
    console.log('queueUrl ', queueUrl)

    const params: AWS.SQS.SendMessageRequest = {
        QueueUrl: queueUrl,
        DelaySeconds: 0,
        MessageBody: JSON.stringify({
            id: 1,
            name: 'Iphone X',
            description: ' IPhone X By Apple',
            value: 12000
        }),
        MessageAttributes: {
            'Product_1': {
                DataType: 'String',
                StringValue: 'MacBook S1'
            },
            'Product_2': {
                DataType: 'String',
                StringValue: 'Ipad X'
            }
        }
    }

    sqs.sendMessage(params, function(error: AWS.AWSError, data){
        if(error){
            console.log(`Error: ${error}`)
        } else {
            console.log(`Success: ${JSON.stringify(data)}`)
        }
    })
}

sendSQS();