## Creating QUEUES in AWS (SQS) using Node.js

## :rocket: Technologies
- [Nodejs](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [SQS (AWS)](https://aws.amazon.com/pt/sqs/)

## 💻 Installation
 ```shell
cd "directory of your choice"
git clone git@github.com:diegolemospadilha/sqs-queue-node.git
```

After install the dependencies (using yarn).
```shell
yarn install
```

Create a SQS Queue in AWS. After create a .env file and add the url in the QUEUE_URL variable (see the file .env.example).

In sequence, run this command to compile project.
```shell
yarn tsc
```

The project will be compiled into dist directory.

## Structure of project

 - src/send.ts: File with example to send data from the queue.
 - src/read.ts: File with example to read data from the queue.
 - src/delete.ts: File with example to consumer and delete message from the queue.

## Running of examples

* Sending messages from the queue.
```shell
node dist/send.js
```

* Reading messages from the queue.
```shell
node dist/read.js
```

* Deleting messages from the queue.
```shell
node dist/delete.js
```