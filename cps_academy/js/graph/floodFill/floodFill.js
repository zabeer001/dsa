/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

function dfs(image, r, c, original, color) {

    // console.log(image[r][c], original);

    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) return;

    //  console.log("row",r,"col" ,c);

    // console.log("point",image[r][c],"original" ,original);

    if (image[r][c] !== original) return;

    image[r][c] = color;


    dfs(image, r + 1, c, original, color)
    dfs(image, r - 1, c, original, color)
    dfs(image, r, c + 1, original, color)
    dfs(image, r, c - 1, original, color)
}


var floodFill = function (image, sr, sc, color) {

    let original = image[sr][sc];
    if (original === color) return image;

    dfs(image, sr, sc, original, color);

    return image;

};



// image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0

const image = [
  [1, 1, 0],
  [1, 0, 0],
  [1, 1, 1]
];

console.log(floodFill(image, 0, 0, 5));