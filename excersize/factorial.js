let num = 7;

function fact(num) {
  if (num < 0) {
    console.log("Please Enter positive numbers");
  } else if (num == 1 || num == 0) {
    console.log("The factorial of " + num + " is 1");
  } else {
    let arr = [];
    let fac = 1;
    for (let i = 1; i <= num; i++) {
      arr[i] = num - (i - 1);
      fac *= i;
    }
    let fac2 = arr.reduce((acc, num) => acc * num, 1);
    // console.log(arr)
    console.log("method one : " + fac + " method two : " + fac2);
  }
}



function fact2(num){
  if (num < 0) {
    console.log("Please Enter positive numbers");
  }
  else {
    if (num == 1 || 0 ){
      return 1;
    }
    return num*fact2(num-1)
  }
}


fact(num);
console.log(fact2(num))