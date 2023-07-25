// WRITE YOUR CODE IN HERE:
const listEl = document.querySelectorAll('li');

for (let i = 0; i < listEl.length; i++)
{
    listEl[i].classList.toggle('highlight');
}
