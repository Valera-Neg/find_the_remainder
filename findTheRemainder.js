function remainder(n, m){
  return Math.max(n, m) % Math.min(n,m);
}

console.log(remainder(17,5)) //> 2
console.log(remainder(13, 72)) //> 7
console.log(remainder(1, 0)) //> NaN
console.log(remainder(0, 0)) //> NaN