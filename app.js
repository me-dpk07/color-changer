const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) =>{
  console.log(button);
  button.addEventListener('click', (insert) =>{
    console.log(insert);
    console.log(insert.target);
    if (insert.target.id === 'grey') {
      body.style.backgroundColor = insert.target.id;
    }
    if (insert.target.id === 'green') {
      body.style.backgroundColor = insert.target.id;
    }
    if (insert.target.id === 'blue') {
      body.style.backgroundColor = insert.target.id;
    }
    if (insert.target.id === 'pink') {
      body.style.backgroundColor = insert.target.id;
    }
    
  });
});

