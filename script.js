// Function with parameters and return values
function calculateArea() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(width) || isNaN(height)) {
      document.getElementById('result').textContent = "Please enter valid numbers!";
      return;
    }
  
    const area = width * height;
    document.getElementById('result').textContent = `Area: ${area}`;
  }
  
  // Function demonstrating scope
  let globalVar = "I'm global!";
  
  function demonstrateScope() {
    let localVar = "I'm local!";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
  }
  
  demonstrateScope();
  // console.log(localVar); // Uncommenting this will throw an error (localVar is not defined)
  
  // Function to toggle a CSS class
  function toggleAnimation() {
    const card = document.querySelector('.animated-card');
    card.classList.toggle('visible');
  }