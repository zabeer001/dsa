/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const roatteArr = (arr, k=3) => {
    // console.log("hello");
//  let stack = [];

    // console.log(k);

    if (arr.length > 1 && k > 0) {
       

        let x;

        for (let i = 0; i < k; i++) {
            //   console.log('hello');

            if (arr.length > 0) {
                x = arr.pop()
              arr.unshift(x)
            }

        }

        // let y;

        // for (let i = 0; i < k; i++) {
        //     //   console.log('hello');

        //     y = stack.shift()
        //     
        // }

    }
    // return {arr,stack};


    let arr1 = arr;
    return { arr1 }

}

var rotate = function (nums, k) {




    let arr = nums;

    // let { arr1, stack } = roatteArr(arr, k);

    let result = roatteArr(arr, k);


    return result;
    // console.log(stack);



    // let x = arr.pop()
    // console.log(x);
    // console.log(arr);




};
