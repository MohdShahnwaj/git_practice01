let count=0;
let flag=true;
// true flag means number is prime.
for(let i=2; i*i<=n; i++){
    if(n%i==0){
    flag=false;
    break;
}
}
if(flag){
    console.log("Not a prime");
}
else{
    console.log("Prime");
}