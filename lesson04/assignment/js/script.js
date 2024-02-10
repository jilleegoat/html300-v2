document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('welcomeModal');
  var span = document.getElementsByClassName("close")[0];

 // Open the modal with a transition
 modal.classList.add('modal-visible'); // Use class to control visibility and apply transition

  // Open the modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}


  // When the user clicks anywhere outside of the modal, close it smoothly
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('modal-visible');
    }
}
});
