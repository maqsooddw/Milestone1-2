// // function changeText() {
//     // document.getElementById('myText').innerHTML = 'Text has changed!';
// // }


// // This is the function that will be called when the button is clicked
// function changeText() {
//     document.getElementById('myText').innerHTML = 'Text has changed!';
//     alert('Hello from the button!');
// }

// // This code runs when the window is loaded
// window.onload = function() {
//     // Find the button with the id 'myButton' and add a 'click' event listener to it
//     document.getElementById('mytext').addEventListener('mouseover', changeText);
// }


function ChangeText() {
    var formTable = document.getElementById('formTable');
    if (formTable.style.display === 'none' || formTable.style.display === '') {
        formTable.style.display = 'block'; // Show form
    } else {
        formTable.style.display = 'none'; // Hide form
    }
}