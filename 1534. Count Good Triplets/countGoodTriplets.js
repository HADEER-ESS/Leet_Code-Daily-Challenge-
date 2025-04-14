var countGoodTriplets = function (arr, a, b, c) {
    let ans = 0;
    let min = Math.min(a, c)

    //Brute Force
    // for(let i=0 ; i<arr.length-2;i++){

    //     for(let j=i+1; j<arr.length-1; j++){

    //         for(let k=j+1 ; k<arr.length; k++){

    //             if(
    //                 Math.abs(arr[i] - arr[j]) <= a &&
    //                 Math.abs(arr[j] - arr[k]) <= b &&
    //                 Math.abs(arr[i] - arr[k]) <= c
    //             ){
    //                 ans++
    //             }
    //         }
    //     }
    // }

    // return ans

    for (let i = 0; i < arr.length - 2; i++) {

        for (let j = i + 1; j < arr.length - 1; j++) {

            if (Math.abs(arr[i] - arr[j]) > a) continue;
            for (let k = j + 1; k < arr.length; k++) {
                if (
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c
                ) {
                    ans++
                }
            }
        }
    }

    return ans

};