var a=[[1,2,3],[4,5,6],[7,8,9]];
var b=[[9,8,7],[6,5,4],[3,2,1]];
for(var k=0;k<3;k++){
var m=''
for(var i=0;i<3;i++){
var l=0;
for(var j=0;j<3;j++){
  l+=a[k][j]*b[j][i];}
  m+=(l+' ');}
console.log(m);
}
