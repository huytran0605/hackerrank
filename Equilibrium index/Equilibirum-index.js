function solution(A) {
    let sum = 0;
    for(let i=0;i<A.length;i++){
        sum+=A[i]
    }
    let leftSum = 0;
    let rightSum = 0;
    for(let i=0;i<A.length;i++){
        rightSum = sum -(leftSum+A[i])
        if(leftSum == rightSum) {
            return i;
        }
        leftSum += A[i];      
    }
    return -1;
}