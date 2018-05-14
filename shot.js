
var steps = 12;
var fo = '';

for(i = 0; i < 12; i++)
{
    fo += ' '.repeat(steps-i) + '*'.repeat(i) + '\n';
}
console.log(fo);