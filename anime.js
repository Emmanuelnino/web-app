const textTotype = "Emmanuel Tembo";
const typingSpeed = 100;


function typeText() {
    const typingElement = document.getElementById("typing-text");
    let charIndex = 0;

    function type() {
        typingElement.textContent += textTotype[charIndex];
        charIndex++;

        if (charIndex<textTotype.length) {
            setTimeout(type, typingSpeed);

        }else{

            typingElement.style.borderRight = "none";
            typingElement.classList.add("cursor-blink");
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", typeText);