// number of rows and columns (nodes)
let r = 4;  // rows
let c = 4;  // columns

// create adjacency matrix filled with 0
for (let i = 0; i < r; i++) {
  adjMat[i] = [];
  
  for (let j = 0; j < c; j++) {
    adjMat[i][j] = 0;   // put 0 in every cell
  }
}



// example edges
let edges = [
  [1, 2],
  [2, 3],
  [3, 4]
];

// edge length 2

// fill matrix
for (let i = 0; i < edges.length; i++) {
  let u = edges[i][0];
  let v = edges[i][1];

  adjMat[u][v] = 1;
  adjMat[v][u] = 1; // remove this line if directed
}

// print matrix
for (let i = 1; i <= r; i++) {
  let row = "";
  for (let j = 1; j <= c; j++) {
    row += adjMat[i][j] + " ";
  }
  console.log(row);
}