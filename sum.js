const args = process.argv;

console.log(args.slice(2));
let a = args[2];
let b = args[3];
let c = Number(a) + Number(b);
console.log(c);

