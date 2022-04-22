
const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = 'red', 'yellow', 'green';
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0){
    document.body.style.backgroundColor = 'red';
    //document.body.style.textAlign = 'hello';
  }
  else if (randomNumber == 1) {
    document.body.style.backgroundColor = 'yellow';
  }

  else if (randomNumber == 2) {
    document.body.style.backgroundColor = 'green';
  }
  // 👇️ optionally change text color
   //document.body.style.color = 'black';
});

// function changeColor(){
//     document.body.style.backgroundColor= 'rgb(' + Math.round('red') + ',' + Math.round('yellow') + ',' Math.round('yellow');
// });

