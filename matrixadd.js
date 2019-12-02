var a=[[2,3,4],[8,6,3],[4,5,6]];
var b=[[8,5,7],[3,6,3],[4,5,6]];
for(var i=0;i<3;i++){
var l=' ';
for(var j=0;j<3;j++){
  l+=((a[i][j]+b[i][j])+' ');
}
console.log(l);
}
