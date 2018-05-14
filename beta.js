
function st (n){
var steps = n;
var fo = '';

for(i = 0; i < n; i++)
{
    fo += ' '.repeat(steps-i) + '*'.repeat(i) + '\n';
}
return fo;
}

var x = st(6);
console.log(x);