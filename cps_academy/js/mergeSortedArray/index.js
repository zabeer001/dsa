const solution = (nums1, m, nums2, n) => {

    //    nums1 = nums1.slice(0,m)
    //     nums2 = nums2.slice(0,n)


    nums1.length = m;
    nums2.length = n;

    let nums = nums1.concat(nums2);
    // numbers.sort((a, b) => a - b);
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        nums1[i] = nums[i]
    }

    return nums1


}



nums1 = [1, 2, 3, 0, 0, 0];
m = 3;


nums2 = [2, 5, 6];
n = 3;

let result = solution(nums1, m, nums2, n)
console.log(result);
