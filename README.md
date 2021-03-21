# EWar Assignment

## Problem Statement 1

**This is a serverless architechture using Lambda, API Gateway and GraphQL.**
> I have used my personel AWS Account and Domain.

**GraphQL Playground is enabled, Please use the _Schema_ for more information.**

API & Playground LINK **https://api.slay.co.in/ewar**

To run the Code locally 

**Install "Serverless CLI" and use the following command**

```
serverless offline  //(by default development environment)
or
serverless offline --stage {production/development}
```

## Problem Statement 2

**This is also integrated in the API**

Use the Query

```
query knightProblem{
  knightProblem(start: [1,1], target: [7,1])
}
```
### Algorithm
```
1. Check and validate Input if outof boundry throw error.
2. Find all the possible direction a knight can moves.
3. Create an empty queue and push the Starting position of the knight in the queue.
4. Create an object of visited nodes that a knight can jump to and mark the initial position as visited true rest will be false.
5. Iterate through the Queue untill its empty.
   1. Fetch the first object in the queue and callculate all the possible moves to reach the target.
   2. If First object position and target position are the same then "return Distance".
   3. Again callculate all the possible direction a knight can move.
      1. Check if the direction is out of boundry or not.
      2. If the direction is not out of boundry mark the visited node as visited.
      3. Push the new position of knight to the Queue
      4. Repeate untill all the possible direction from that position is visited and untill reached to the target position.

```

>Input should be Array of 2 Int numbers (ex: [1, 1]) representing the Starting and Target position of the knight.