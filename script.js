const btnClose = document.querySelector(".close-modal");
const btnModal = document.querySelector(".modal");
const btns = document.querySelectorAll(".alllevel");
const overlay = document.querySelector(".overlay");

//close madal

// const closeModal = function () {
//     btnModal.style.display = 'none';
//     overlay.classList.add('hidden');
// }

// btnClose.addEventListener('click', closeModal);

// for (let i = 0; i < btns.length; i++){
//     btnModal[i].addEventListener('click', closeModal)
// }

//sentence part

const sentence ="Nature is beautiful, yet it is difficult to put into words. Nature is honoured with a variety of religious traditions. The primary source of life on Earth is the components that exist naturally. All of the elements are linked. Natural ingredients can never be substituted. Humans process natural materials for use in today’s ever-changing world and destroy their rawness and individuality. Human activities have an impact on nature, and as a result, the quality of the environment is deteriorating. Deterioration of nature is primarily caused by pollution of the air and water. The oxygen produced by a single fully-grown tree is enough to supply ten people, and the amount of oxygen released by a forest is unquestionably adequate for a metropolis or town. Nature is a healer, and it is the foundation for many industries. Nature, on the other hand, is both a giver and a taker, according to legends. Earthquakes, volcanic eruptions, floods, and cyclones are examples of natural calamities. These disasters, which occur as a result of natural causes, have resulted in significant damage. The benefits of sunlight and fresh air to our health cannot be overstated. Nature has a variety of beneficial effects on our bodies. For recuperation and vacations, people choose natural settings. People prefer to raise their children in the countryside in the United States. Their primary goal is to introduce their children to the benefits of natural beauty.";
const typeSpace = document.querySelector("#typeSpace p");
let input = document.querySelector(".whole #input-box");
let charIndex = 0;
const letterSpans = sentence.split("");
letterSpans.forEach((span) => {
  const spans = `<span>${span}</span>`;
  typeSpace.innerHTML += spans;
});
function checking(e)
{
  const key = e.key;
  const letter = typeSpace.querySelectorAll("span");
  // console.log(letter);
  let inputType = input.value.split("")[charIndex];//splits the input text
  if (key.length === 1) {
    console.log(key)
    if (letter[charIndex].textContent == inputType ) {   //compares
      letter[charIndex].classList.add("correct")      
      letter[charIndex].style.color="#56964f"
      }
    else {
      letter[charIndex].classList.add("incorrect")
      letter[charIndex].style.color="#cb3439"
    }
    charIndex++;
  }
  console.log(charIndex)
  //to go back
    if (key === "Backspace") {                       
      charIndex--;
      letter[charIndex].classList.remove("correct", "incorrect")
      letter[charIndex].style.color="white"
    }   
}
input.addEventListener("keyup", checking)
