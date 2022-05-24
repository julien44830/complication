//soit le mot 'professionnelle';
//soit la variable 'cpt';
//on parcourt chaqu'une des lettres du mot 'professionnelle';
//pour chaqu'une des lettres de 'professionnelle' on incremente 'cpt' de 1;
//on fait un console.log de 'cpt';


let word = 'hippopotomonstrosesuipédaliophobie';
let cpt = 0;

while (word[cpt]){
  cpt = cpt + 1;
}
console.log(word +' possède '+ cpt +' lettres ')


//alert(`le mot ${word} contien ${cpt} lettres`)
/***************/
console.log()

//bouclke for qui compte de 1 à 10
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// Initialization of variable s to 0

let s = 0
// As long as s is less than 5, the instructions in the loop are executed.
while (s < 5) {
  // Display a message in the console with the value s
console.log(s + ' : est inférieur à 5')

  // Increment s by 1 (equivalent to s = s + 1)
  s++

  // Display a message with the new value of s
  console.log('n après incrément : ' + s)
  console.log()

  // Initialization of variable n to 0
let n = 0

do {
  // Display a message in the console with the value n
  console.log('n : ' + n)

  // Increment n by 1 (n = n + 1)
  n++
  } while (n < 3)
}
console.log('....................')
/******************************/
//on recupèrte #tilte

var element = document.getElementById(title)
//change la couleur du titre
function changeColor(newColor) {
  var elem = document.getElementById('title');
  elem.style.background = newColor;
}

//affiche dans la console le body
/*
window.addEventListener('load', () => {
  console.log(document.body.innerHTML)
})
*/
//affiche un message quand la page est intégralement chargée

window.addEventListener('load', () => {
  window.alert('cette page est chargé intégralement')
})


console.log('animation image au scroll')


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 350) {
    document.getElementById("myImg").className = "slideUp";
  }
}