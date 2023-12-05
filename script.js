// // Import the WebArray library
// import("https://cdn.toolbomber.com/js/WebArray.min.js")
//   .then(async () => {
//     // Initialize WebArray
//     const wishStorageKeys = await WebArray.generateKeys("WISH_ARRAY_SEED");
//     const wishArray = new WebArray(wishStorageKeys);

//     // Function to open the wish form modal
//     function openWishForm() {
//       document.getElementById("wishFormModal").style.display = "block";
//     }

//     // Function to close the wish form modal
//     function closeWishForm() {
//       document.getElementById("wishFormModal").style.display = "none";
//     }

//     // Function to generate a wish URL and store the wish
//     async function generateWishUrl() {
//       const sender = document.getElementById("sender").value;
//       const receiver = document.getElementById("receiver").value;

//       // Create a wish object
//       const wishObject = {
//         from: sender,
//         to: receiver,
//         message:
//           "Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.",
//       };

//       // Append the wish to the WebArray
//       await wishArray.append(wishObject);

//       // Close the wish form modal
//       closeWishForm();
//     }

//     // Add event listeners after defining functions
//     document
//       .querySelector(".shareButton button")
//       .addEventListener("click", openWishForm);
//     document
//       .getElementById("wishForm")
//       .addEventListener("submit", generateWishUrl);
//   })
//   .catch((error) => {
//     console.error("Error loading WebArray:", error);
//   });

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
