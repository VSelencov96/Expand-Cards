// create a variable called 'panels' and use document.querySelectorAll*
const panels = document.querySelectorAll('.panel')

// forEach Method, which is a high order array method and these methods take in a function as an argument.
panels.forEach(panel => {
   panel.addEventListener('click', () => {
      removeActiveClasses()                  // call remove func
      panel.classList.add('active')
   })
})

// Remove active classes after select another image
function removeActiveClasses() {
   panels.forEach(panel => {
      panel.classList.remove('active')
   })
}