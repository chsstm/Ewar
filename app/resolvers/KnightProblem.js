createQueue = (x, y, dis) => ({ x: x, y: y, dis: dis })

const isInside = (x, y, N) => {
   if (x >= 1 && x <= N && y >= 1 && y <= N)
      return true;
   return false;
}

shortestPath = (start, target) => {
   const dx = [- 2, -1, 1, 2, -2, -1, 1, 2]
   const dy = [- 1, -2, -2, -1, 1, 2, 2, 1]

   const que = []

   que.push(createQueue(start[0], start[1], 0))

   let visited = {}

   for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
         let pos = `${i}` + j
         visited[pos] = { visited: i === start[0] && j === start[1] ? true : false }
      }
   }

   while (que.length !== 0) {
      let top = que.shift()
      if (top.x === target[0] && top.y === target[1]) {
         console.log("Distance", top.dis)
         // distance = top.dis
         return top.dis
      }

      for (let i = 0; i < 8; i++) {
         let x = top.x + dx[i];
         let y = top.y + dy[i];

         if (isInside(x, y, 8) && !visited[`${x}` + `${y}`].visited) {
            visited[`${x}` + `${y}`].visited = true;
            que.push(createQueue(x, y, top.dis + 1));
         }
      }
   }

}

exports.KnightProblem = async ({ }, { start, target }) => {
   try {
      if (Math.max(...start, ...target) > 8 || Math.min(...start, ...target) < 1) {
         throw "Input is out of Boundry, Input should be 1 - 8"
      } else {
         let distance = await shortestPath(start, target)
         return `Shortest Knight Distance is ${distance}`
      }


   }
   catch (error) {
      throw error
   }
}



