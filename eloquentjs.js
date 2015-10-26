// eloquent Javascript - 02 - looping a triangle

function triangle(n){
  var t0 = performance.now();
  for(var i = 1; i <= n; i++){
    var result = '';
    for(var j = i; j > 0;j--) result += "#";
    console.log(result + "\n");
  }
  var t1 = performance.now();
  console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
}


function tr(n){
  var char= "#";
  for(var i = 1; i <= n; i++){
    console.log(char);
    char+= "#";
  }
}


function tr2(n){
  var t0 = performance.now();
  var char= "#";
  for(var i = 1; i <= n; i++){
    console.log(char);
    char+= "#";
  }
  var t1 = performance.now();
  console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
}


// eloquent Javascript - 02 - FizzBuzz
function fizzBuzz(n){
	for( var i = 1; i <= n; i++){
		if(i%3 === 0 && i%5 === 0) console.log('FizzBuzz');
		else if(i%3 === 0) console.log('Fizz');
		else if(i%5 === 0) console.log('Buzz');
		else console.log(i);
	}
}

fizzBuzz(20);


// eloquent Javascript - 02 - chessboard
function chess(n){
	var arr = '',fl;
	for(var i = 1; i <= n*n; i++){
		if(i%2 == 0 ) {
			if(fl) arr += "#";
			else arr += " ";
		}
		else {
			if(!fl) arr += "#";
			else arr += " ";
		}		
		if(i%n == 0) arr += "\n";
		if(i%n == 0 && n%2 == 0) fl = !fl;
	}
	console.log(arr);
}

chess(8);

//alternative chess function with two loops
function ch(n){
	var arr = '',fl;
	for(var i = 1; i <= n; i++){
		for (var j = 1; j <= n; j++){
			if(fl){
				if(j%2 == 0) arr += "#";
				else arr += " ";
			} else {
				if(j%2 == 0) arr += " ";
				else arr += "#";
			}
		}
		arr += "\n";
		fl = !fl;
	}
	console.log(arr);
}

ch(8);



// eloquent - 03 - find minimum of two arguments

//function wrapper: allows us to quickly test the performance of a function 
function test(args){
	t0 = performance.now();
	var output = ch.apply(this, arguments);
	t1 = performance.now();
	console.log('function took ' + (t1-t0) +' ms')
	return output;
}

function speedTest(functionCallBack, arg1, arg2){
	t0 = performance.now();
	var output = functionCallBack(arg1, arg2);
	t1 = performance.now();
	console.log('function took ' + (t1-t0) +' ms')
	return output;
}


// min function:
function min(a,b){
	return a<b ? a : b;
}



function perfTest(callback){
	t0 = performance.now();
	var output = callback();
	t1 = performance.now();
	console.log('function took ' + (t1-t0) +' ms')
	return output;
}

//we use bind as a way to "curry" or preset one or more parameters, we use null because we are not using/needing 'this' in the callbacked function
perfTest(min.bind(null, 123123, 4321));



// function to check if number is odd or even without using %
function isEven(n){
	if(n === 0) return true;
	else if (n === 1) return false;
	return n < 0 ? isEven(n+2) : isEven(n-2);
}

function isEven2(n){
	if(n > 1) return isEven2(n-2);
	if(n < -1) return isEven2(n+2);
	return Boolean(n-1);
}


// bean counting: how many uppercase "B"s are there in a string
function countBs_deprecated(string){
	var count = 0;
	for(var i = 0; i < string.length; i++){
		if (string.charAt(i) === 'B') count++;
	}
	return count;
}

// char counting: how many chars X are there in the string
function countChar(string,char){
	var count = 0;
	for (var i = 0; i < string.length; i++){
		if (string.charAt(i) === char) count++;
	}
	return count;
}

// bean counting improved: now it will use the more generic char counting function
function countBs(string){
	return countChar(string,'B');
}

console.log(countBs("there is just one B in this string"));
console.log(countBs("this string contains several BBBs, proBaBly 5"));


