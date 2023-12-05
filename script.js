// Import the WebArray library
import("https://cdn.toolbomber.com/js/WebArray.min.js")
  .then(async () => {
    // Initialize WebArray
    const wishStorageKeys = await WebArray.generateKeys("WISH_ARRAY_SEED");
    const wishArray = new WebArray(wishStorageKeys);

    // Function to open the wish form modal
    function openWishForm() {
      document.getElementById("wishFormModal").style.display = "block";
    }

    // Function to close the wish form modal
    function closeWishForm() {
      document.getElementById("wishFormModal").style.display = "none";
    }

    // Function to generate a wish URL and store the wish
    async function generateWishUrl() {
      const sender = document.getElementById("sender").value;
      const receiver = document.getElementById("receiver").value;

      // Create a wish object
      const wishObject = {
        from: sender,
        to: receiver,
        message:
          "Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.",
      };

      // Append the wish to the WebArray
      await wishArray.append(wishObject);

      // Close the wish form modal
      closeWishForm();
    }

    // Add event listeners after defining functions
    document
      .querySelector(".shareButton button")
      .addEventListener("click", openWishForm);
    document
      .getElementById("wishForm")
      .addEventListener("submit", generateWishUrl);
  })
  .catch((error) => {
    console.error("Error loading WebArray:", error);
  });
