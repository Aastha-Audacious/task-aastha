// setInterval-clearInterval 

let num =0;
function printNumber(){
    num++;
    console.log(num);
    // to stop at particular time
    if(num>=5){
        clearInterval(printt);
    }
}

const printt = setInterval(printNumber, 2000)

// output
// 1
// 2
// 3
// 4
// 5

// setTimeout-clearTimeout