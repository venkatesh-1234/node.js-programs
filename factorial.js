var a=fact(4);
console.log(a);
function fact(k){
if(k==1)
return 1;
return k*fact(k-1);
}

