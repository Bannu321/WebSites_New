const cube = document.querySelector(".cube");
const resultDiv = document.querySelector(".result");
const startBtn = document.querySelector(".start");
const faces = document.querySelectorAll(".face");

// Define rotation positions for 6 faces
const rotations = [
  { x: 0,   y: 0,   face: "Two",   number: 2 },
  { x: 0,   y: 90,  face: "Three", number: 5 },
  { x: 0,   y: 180, face: "Four",  number: 4 },
  { x: 0,   y: -90, face: "Five",  number: 3 },
  { x: -90, y: 0,   face: "One",   number: 1 },
  { x: 90,  y: 0,   face: "Six",   number: 6 },
];

startBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * rotations.length);
  const { x, y, face, number } = rotations[random];

  // Apply rotation
  
  cube.classList.remove("Roll");
  void cube.offsetWidth; // force reflow to restart animation
  
  // Start animation
  cube.classList.add("Roll");
  
  // Wait for animation to end (match your animation duration)
  setTimeout(() => {
      // or show face number
    }, 1000); // adjust this to match animation duration
    
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    cube.style.transition = "transform 1.5s ease-in-out";
    // After rotation ends
    setTimeout(() => {
        // // Hide the image of the selected face
        // const selectedFace = document.querySelector(`.face.${face}`);
        // const img = selectedFace.querySelector("img");
        // // if (img) img.style.display = "none";
        // // else img.style.display = "block";
        
        // Show result
        resultDiv.textContent = `You have Rolled: ${number}`;
    }, 2000);
});


