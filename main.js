var x = 10;

if(x > 12) {
    console.log(x);
    console.log('groovin with if');
}
else {
    console.log('too small');
}


//part 1 : initialize 
//part 2: condition 
//part 3: post loop action
for(var i = 0; i < x; i++) {
    
    
    if(i % 2 === 0) {
        console.log(i);
    }
}

function sayHello() {
    console.log('hi');
}

if (x % 2 === 0) {
    sayHello();
}

function evenOrOdd() {
    var input = document.getElementById('number');

    var y = input.value;
    
    if(y % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }

}




