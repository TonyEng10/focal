let arg = process.argv.slice(2);

const reverse = function() {

  for (let j = 0; j < arg.length; j++) {
    let newString = "";
    for (let i = arg[j].length - 1; i >= 0; i--) {
      newString += arg[j][i];
    }
    console.log(newString);
  }
};
reverse();
/*const tail = function(arg) {
  let x = arg.slice(2);
  return x;
};
 
//console.log(reverse('hello'));
console.log(reverse(tail));*/