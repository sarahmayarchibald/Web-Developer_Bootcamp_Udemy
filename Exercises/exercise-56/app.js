const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let allSpans = document.querySelectorAll('span');

for (let i = 0; i < allSpans.length; i++)
{
    allSpans[i].style.color = colors[i];
}

// Other syntax:
const span = document.querySelectorAll('span');

let i = 0;
for(let letter of span){
    letter.style.color=`${colors[i]}`;
    i++;
}
