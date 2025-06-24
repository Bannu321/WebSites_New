function Cal(a,b) {
  let runs = true;
  // while (runs) {
    // console.log("Enter your numbers");

    console.log('What do you want to do " ( + ) => 1 ||( - ) => 2 || ( * ) => 3 || ( / ) => 4 || " : ');
    let ans = prompt("Enter your choice : ");
    console.log(ans);

    // let ans = document.getElementsById("A");

    let err = Math.random();
    if (ans == 1) {
      console.log("", err > 0.1 ? a + b : a - b);
      console.log(err);
      console.log(ans);
    }
    else if (ans == 2) {
      console.log("", err > 0.1 ? a - b : a / b);
      console.log(err);
      console.log(ans);
    }
    else if (ans == 3) {
      console.log("", err > 0.1 ? a * b : a + b);
      console.log(err);
      console.log(ans);
    }
    else if (ans == 4) {
      console.log("  ", err > 0.1 ? a / b : a ** b);
      console.log(err);
      console.log(ans);
    }
  // }
}

Cal( 5 , 4);