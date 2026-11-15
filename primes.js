const fs=require('fs');
const N=+fs.readFileSync(0,'utf-8');
if(N<2){console.log(0);process.exit(0)}
const size=(N-1)>>1, s=new Uint8Array(size), lim=Math.sqrt(N)|0;
let cnt=size; // odds 3..N (2 counted separately: cnt starts at size, +1 for 2 below)
for(let i=0;;i++){
  const p=2*i+3;
  if(p>lim)break;
  if(s[i])continue;
  for(let j=(p*p-3)>>1;j<size;j+=p) if(!s[j]){s[j]=1;cnt--}
}
console.log(cnt+1);
