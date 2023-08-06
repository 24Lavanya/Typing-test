const paraPlace = document.querySelector(".writing p");
const typeInput = document.querySelector(".wrapper .input-field");
let currentIndex=0;
let wrong=0;
/////                          I dont know modal thing             ///////////////////

// const btnClose = document.querySelector('.close-modal');
// const btnModal = document.querySelector('.modal');
// const btns = document.querySelectorAll('.alllevel');
// const overlay = document.querySelector('.overlay');

// //close madal

// const closeModal = function () {
//     btnModal.style.display = 'none';
//     overlay.classList.add('hidden');
// }
// btnClose.addEventListener('click', closeModal);

// for (let i = 0; i < btns.length; i++){
//     btnModal[i].addEventListener('click', closeModal)
// }
///////////////                   I kept MODAL AS IT IS               /////////////////////

//////////////                       First we want many paras                   ///////////////////////

const groupofparas = ["To the two friends, the treehouse was much more than a treehouse. It was a sanctuary away from the other kids where they could be themselves without being teased or bullied. It was their secret fortress hidden high in the branches of a huge oak that only they knew existed. At least that is what they thought. They were more than a little annoyed when their two younger sisters decided to turn the treehouse into a princess castle by painting the inside pink and putting glitter everywhere",
"I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. Everyone in the car had a different opinion on where the best place to eat would be with nobody agreeing with the suggestions of the others.I will start writing consistently again",
"They needed to find a place to eat. The kids were beginning to get grumpy in the back seat and if they didn't find them food soon, it was just a matter of time before they were faced with a complete meltdown. Even knowing this, the solution wasn't easy.  It seemed to be an impossible no-win situation where not everyone would be happy no matter where they decided to eat which in itself would lead to a meltdown. Yet a decision needed to be made and it needed to be made quickly",
"The red line moved across the page. With each millimeter it advanced forward, something changed in the room. The actual change taking place was difficult to perceive, but the change was real. The red line continued relentlessly across the page and the room would never be the same."];
console.log(groupofparas)
/////////////////////////////  Paragrapg nds                            /////////////

//////// Now comes the choosing random para and putting to HTML then slpiting them then into letters each and making thrm  span putting into that writing div again////////////////////

function bringparagraph(){
    //                          let me choose random para               
    const chooserandompara = Math.floor(Math.random() * groupofparas.length);//creates randpmpara
    console.log(chooserandompara) 
    paraPlace.innerHTML = ""      ///  Made the div   empty   //
    //              Now the div is empty and now we should store   //
    let splitedpara = groupofparas[chooserandompara].split("")  /// splits 
    //   
    splitedpara.forEach(function (eachcharecter)
    {
    let spanofletter = `<span>${eachcharecter}</span>`//span creation for each letter
    console.log(spanofletter)
    paraPlace.innerHTML += spanofletter// sum up and put all span back to the div
    })
    paraPlace.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => typeInput.focus());
    paraPlace.addEventListener("click", () => typeInput.focus());
}
/// function works

// Next comes about the typing inside the div and validation

function typingInside() {
    const allLetters = paraPlace.querySelectorAll("span");//charecters
    console.log(allLetters)
    let currentLetter = typeInput.value.split("")[currentIndex];//typed char
    // console.log(currentLetter)
    if(currentIndex < allLetters.length-1){
        if(currentLetter == null) {
            if(currentIndex > 0) {
                currentIndex--;
                if(allLetters[currentIndex].classList.contains("incorrect")) {
                    wrong--;
                }
                allLetters[currentIndex].classList.remove("correct", "incorrect");
            }}
            else {
                if(allLetters[currentIndex].innerText == currentLetter) {
                    allLetters[currentIndex].classList.add("correct");
                    console.log('correct')
                } else {
                    wrong++;
                    allLetters[currentIndex].classList.add("incorrect");
                    console.log('incorrect')
                }
                currentIndex++;
            }
    //Adding and removing classes as i undersatnd its like giving names to it so that we can add CSS properties
    allLetters.forEach(span => span.classList.remove("active"));
    allLetters[currentIndex].classList.add("active");    
}
    else {
    // typeInput.value = "";
}   
}

//
bringparagraph();
typeInput = addEventListener("input", typingInside);

// function tryAgainBtn(){
// bringparagraph()
// typeInput.value = ""

// }