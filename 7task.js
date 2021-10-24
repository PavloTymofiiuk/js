const A = parseInt(prompt(), 10);
if ( A % 3 === 0 && A % 7 === 0 ) alert ("Multiple of 3 and 7");
else if ( A % 3 === 0 )  alert ("Multiple of 3");
else if ( A % 7 === 0 ) alert ("Multiple of 7");
else alert ("Not multiple of 3 and 7");