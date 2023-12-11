function openWishForm() {
  // Handle sending wishes here (e.g., show a form, send data to a server, etc.)
}

// Function to get URL parameters
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Update card with names from URL parameters
document.addEventListener("DOMContentLoaded", function () {
  var fromName = getParameterByName("from");
  var toName = getParameterByName("to");

  // Update the card with names
  if (fromName && toName) {
    document.getElementById("from").innerText = fromName;
    document.getElementById("to").innerText = toName;
  }
});

document
  .querySelector(".birthdayCard")
  .addEventListener("mouseenter", function () {
    document.querySelector(".confetti").style.display = "block";
  });

document
  .querySelector(".birthdayCard")
  .addEventListener("mouseleave", function () {
    document.querySelector(".confetti").style.display = "none";
  });
