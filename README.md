# EWar Assignment

## Problem Statement 1

**This is a serverless architechture using Lambda, API Gateway and GraphQL. **
> I have used my personel AWS Account and Domain.

**GraphQL Playground is enabled, Please use the _Schema_ for more information.**

API & Playground LINK **https://api.slay.co.in/ewar**

To run the Code locally 

**Install "Serverless CLI" and use the following command**

```
serverless offline  (by default development environment)
or
serverless offline --stage {production/development}
```

## Problem Statement 2

**This is also integrated in the API **

Use the Query

```
query knightProblem{
  knightProblem(start: [1,1], target: [7,1])
}
```

>Input should be Array of 2 Int numbers (ex: [1, 1]) representing the Starting and Target position of the knight.