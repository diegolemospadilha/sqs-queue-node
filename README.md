## Creating QUEUES in AWS (SQS) using Node.js

## :rocket: Technologies
- [Nodejs](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [SQS (AWS)](https://aws.amazon.com/pt/sqs/)

## 💻 Installation
 ```shell
cd "directory of your choice"
git clone https://github.com/diegolemospadilha/CursoSpringBoot-Ionic-MC.git
```

After install the dependencies (using yarn)
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

 - src/send.ts: File with example to send data to queue.
 - src/read.ts: File with example to read data from queue.
 - src/delete.ts: File with example to consumer and delete message from queue.

## Running of examples

* Sending data from queue.
```shell
node dist/read.js
```

* Reading data from queue.
```shell
node dist/read.js
```

* Deleting data from queue.
```shell
yarn tsc
```