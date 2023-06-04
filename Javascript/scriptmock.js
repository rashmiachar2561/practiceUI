//-->convert object into array with only values
// let x = {
//     a:1,
//     b:2
// }
// let xArray = [];
// for(let i in x) {
//     xArray.push(x[i]);// pushes values
//     // xArray.push(i);// pushes only keys
// }
// console.log('convert object into array with only values',xArray);


//-->reverse string

// let y = 'hi';
// let res = 'ih';


// let reverseString = (str) =>{
//        return str.split('').reverse().join('');
// }
// let output = reverseString(y);
// console.log('output reverse string '+y,output);


//-->another question

// let obj = {
//     a:1,
//     b:2,
//     getA(){
//         console.log('getA',this.a);
//         return this; // return whole object thats how we are able to read b value => obj.getA().b
//     },
//     getB(){
//         console.log('getB',this.a);
//     }
// }

// console.log('mmo',obj.getA().b);

//--> [1,2,3] => 1,2,3  print only values separated by comma

// solution: array into string

// let x = [1,2,3];
// console.log('result', x.toString());

//-->arrow function and ordinary function
// const obj = {
//     x:1,
//     getX(){
//         const inner = function(){
//             console.log(this.x)
//             // return this;
//         }
//         inner();
//     }
// }

// console.log('obj',obj.getX());

// let x = 10;
// let y = 20;
// let text = x * y;
// let result = eval(text);

// console.log('res',typeof 12345);

//--> Can we use JSON.stringify() for array?
//can be used for json array

// let json ={
//     x:1,
//     y:'rash'
// }

// console.log('Can we use JSON.stringify() for array', JSON.stringify(json));

// console.log('stringify', JSON.stringify(json));
// console.log('stringify', JSON.parse(JSON.stringify(json)));

// let dog = {
//     name:'Jockey',
//     color:'brown',
//     age: 7
//    }
//    function replacer(key,val){
//         if(key == 'name'){
//             return undefined;
//         }
//         return val;
//    }
//    let DogString = JSON.stringify(dog, replacer) ;
//    console.log('DogString',DogString)


//--> iterate through json array

// var arr = [
//     {
//     "id": "1",
//     "msg": "hi",
//     "tid": "2013-05-05 23:35",
//     "fromWho": "hello1@email.se"
//     }, {
//     "id": "2",
//     "msg": "there",
//     "tid": "2013-05-05 23:45",
//     "fromWho": "hello2@email.se"
//     }
//   ];
  
//   Object.keys(arr).forEach((key,value) => {
//     console.log(`${arr[key]}` + value + arr[key]);
//     // console.log('MSG: ' + item.msg);
//     // console.log('TID: ' + item.tid);
//     // console.log('FROMWHO: ' + item.fromWho);
//   })

 
//   arr.forEach((obj)=>{
//     console.log('obj',obj);

//   })

//-->To extract all the even numbers from an array of integers using filter, you can do:
// const numbers = [1, 2, 3, 4, 5, 6,88,74,37,37*2];

// const evenNum = numbers.filter(num => num%2 == 0);
// console.log('evenNum',evenNum);

// const survey = [
//     { name: "Steve", answer: "Yes"},
//     { name: "Jessica", answer: "Yes"},
//     { name: "Peter", answer: "Yes"},
//     { name: "Elaine", answer: "No"}
//   ];
  
//   let result = survey.every(isSameAnswer);
  
//   function isSameAnswer(el, index, arr) {
//     console.log(el, index, arr);
//     if (index === 0) {
//       return true;
//     } else {

//       return (el.answer === arr[index - 1].answer);
//     }
//   }

//   console.log('result',result);


// var a = {};
// b = {key :'b'};
// c = {key :'c'};
// // a[b] = 123;
// a[c]= 456;
// console.log('a',a[b]);

// greet();

// var  greet = ()=>{
//     console.log('Hello World');
// }

// x();
// var x = function(){
//     console.log('xyz');
// }


// function greet(){
//     console.log('Hello World');

// }

var x= 123;

function yy(){
    console.log(x);
    // var x =111;
}

//both does the same
var y = function(){
    console.log(x);
    var x =111;
}

yy();



