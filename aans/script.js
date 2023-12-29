const text = "random access memories"; // Replace with your desired text
const charSpeed = 100;
const spaceSpeed = 400;
let index = 0;

function typeWriter(callback) {
    const typewriterDiv = document.getElementById("title-text");
    if (index < text.length) {
        typewriterDiv.innerHTML += text.charAt(index);
        if (text.charAt(index) === " ") {
        setTimeout(() => {
            typeWriter(callback);
        }, spaceSpeed);
        } else {
        setTimeout(() => {
            typeWriter(callback);
        }, charSpeed);
        }
        index++;
    } else {
        // When typing finishes, execute the callback
        if (typeof callback === "function") {
        callback();
        }
    }
}


typeWriter(() => {
    // Callback function to execute after typing finishes
    const mainContent = document.getElementById("main-content");
    mainContent.style.display = "block";
    const bottom = document.getElementById("bottom");
    bottom.scrollIntoView({behavior: "smooth", block: "start"})
});

