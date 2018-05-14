var myvariable = [5, 16, 'Mickey'];

console.log(myvariable[2]);
console.log(myvariable.length);
var a1 = [65, 88, 12, 45, 66,604, 75, 13, 1, 65, 68];
console.log(a1.sort());
var yovariable = a1.sort();
console.log(yovariable);

var en = [];
var on = [];

for( i= 1; i <= 100; i++)
{
    if ((i%2) == 0) {
        en.push(i);
    }
    else
    {
        on.push(i);
    }
}

console.log( en);
console.log(on);