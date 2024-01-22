// $(document).ready(function() {
//   // Handle image click event
//   $('.image').click(function() {
//       var imageSrc = $(this).attr('src');
//       var imageAlt = $(this).attr('alt');
//       var imageDetails = "Details for " + imageAlt;

//       // Update popup content
//       $('#popupImage').attr('src', imageSrc);
//       $('#imageDetails').text(imageDetails);

//       // Show popup
//       $('#popup').fadeIn();
//   });

//   // Handle close button click event
//   $('#close').click(function() {
//       $('#popup').fadeOut();
//   });

//   // Handle vote button click event
//   $('#voteButton').click(function() {
//       // Add your voting logic here
//       alert('Vote recorded!');
//   });
// });

// -------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//   // Handle image click event
//   var images = document.querySelectorAll('.image');
//   images.forEach(function (image) {
//       image.addEventListener('click', function () {
//           var imageSrc = image.querySelector('img').getAttribute('src');
//           var imageTitle = image.getAttribute('data-title');
//           var imageDescription = image.getAttribute('data-description');
//           var imageSubheading = image.getAttribute('data-subheading');

//           // Update popup content
//           document.getElementById('popupImage').setAttribute('src', imageSrc);
//           document.getElementById('popupTitle').textContent = imageTitle;
//           document.getElementById('popupDescription').textContent = imageDescription;
//           document.getElementById('popupSubheading').textContent = imageSubheading;

//           // Retrieve and display votes from localStorage
//           var voteCount = getVotes(imageTitle);
//           document.getElementById('voteCount').textContent = 'Votes: ' + voteCount;

//           // Show popup
//           document.getElementById('popup').style.display = 'block';
//       });
//   });

//   // Handle close button click event
//   document.getElementById('close').addEventListener('click', function () {
//       document.getElementById('popup').style.display = 'none';
//   });

//   // Handle vote button click event
//   document.getElementById('voteButton').addEventListener('click', function () {
//       var imageTitle = document.getElementById('popupTitle').textContent;

//       // Increment vote count and update localStorage
//       var voteCount = getVotes(imageTitle);
//       voteCount++;
//       setVotes(imageTitle, voteCount);

//       // Update vote count display
//       document.getElementById('voteCount').textContent = 'Votes: ' + voteCount;

//       // Optionally, you can provide feedback to the user that their vote was recorded
//       alert('Vote recorded!');
//   });

//   // Helper function to get votes from localStorage
//   function getVotes(imageTitle) {
//       var storedVotes = localStorage.getItem(imageTitle + '_votes');
//       return storedVotes ? parseInt(storedVotes) : 0;
//   }

//   // Helper function to set votes in localStorage
//   function setVotes(imageTitle, voteCount) {
//       localStorage.setItem(imageTitle + '_votes', voteCount.toString());
//   }
// });


// -------------------------------------------------------------------------


// document.addEventListener('DOMContentLoaded', function () {
//   // Handle image click event
//   var images = document.querySelectorAll('.image');
//   images.forEach(function (image) {
//       image.addEventListener('click', function () {
//           console.log('Image clicked:', image);

//           // Check if img element exists within the .image div
//           var imgElement = image.querySelector('img');
//           if (!imgElement) {
//               console.error('No img element found within the .image div:', image);
//               return;
//           }

//           var imageSrc = imgElement.getAttribute('src');
//           var imageTitle = image.getAttribute('data-title');
//           var imageDescription = image.getAttribute('data-description');
//           var imageSubheading = image.getAttribute('data-subheading');

//           // Update popup content
//           document.getElementById('popupImage').setAttribute('src', imageSrc);
//           document.getElementById('popupTitle').textContent = imageTitle;
//           document.getElementById('popupDescription').textContent = imageDescription;
//           document.getElementById('popupSubheading').textContent = imageSubheading;

//           // Retrieve and display votes from localStorage
//           var voteCount = getVotes(imageTitle);
//           document.getElementById('voteCount').textContent = 'Votes: ' + voteCount;

//           // Show popup
//           document.getElementById('popup').style.display = 'block';
//       });
//   });

//   // Handle close button click event
//   document.getElementById('close').addEventListener('click', function () {
//       document.getElementById('popup').style.display = 'none';
//   });

//   // Handle vote button click event
//   document.getElementById('voteButton').addEventListener('click', function () {
//       var imageTitle = document.getElementById('popupTitle').textContent;

//       // Increment vote count and update localStorage
//       var voteCount = getVotes(imageTitle);
//       voteCount++;
//       setVotes(imageTitle, voteCount);

//       // Update vote count display
//       document.getElementById('voteCount').textContent = 'Votes: ' + voteCount;

//       // Optionally, you can provide feedback to the user that their vote was recorded
//       alert('Vote recorded!');
//   });

//   // Helper function to get votes from localStorage
//   function getVotes(imageTitle) {
//       var storedVotes = localStorage.getItem(imageTitle + '_votes');
//       return storedVotes ? parseInt(storedVotes) : 0;
//   }

//   // Helper function to set votes in localStorage
//   function setVotes(imageTitle, voteCount) {
//       localStorage.setItem(imageTitle + '_votes', voteCount.toString());
//   }
// });

// -------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//   // Handle image click event
//   var images = document.querySelectorAll('.image');
//   images.forEach(function (image) {
//       image.addEventListener('click', function () {
//           console.log('Image clicked:', image);

//           // // Check if img element exists within the .image div
//           // var imgElement = image.querySelector('img');
//           // if (!imgElement) {
//           //     console.error('No img element found within the .image div:', image);
//           //     return;
//           // }

//           var imageSrc = imgElement.getAttribute('src');
//           var imageTitle = image.getAttribute('data-title');
//           var imageDescription = image.getAttribute('data-description');
//           var imageSubheading = image.getAttribute('data-subheading');

//           // Update popup content
//           document.getElementById('popupImage').setAttribute('src', imageSrc);
//           document.getElementById('popupTitle').textContent = imageTitle;
//           document.getElementById('popupDescription').textContent = imageDescription;
//           document.getElementById('popupSubheading').textContent = imageSubheading;

//           // Retrieve and display votes from localStorage
//           var voteCount = getVotes(imageTitle);
//           document.getElementById('voteCount').textContent = 'Votes: ' + voteCount;

//           // Show popup
//           document.getElementById('popup').style.display = 'block';
//       });
//   });

//   // Handle close button click event
//   document.getElementById('close').addEventListener('click', function () {
//       document.getElementById('popup').style.display = 'none';
//   });

//   // Handle vote button click event
//   document.getElementById('voteButton').addEventListener('click', function () {
//       var imageTitle = document.getElementById('popupTitle').textContent;

//       // Increment vote count and update localStorage
//       var voteCount = getVotes(imageTitle);
//       voteCount++;
//       setVotes(imageTitle, voteCount);

//       // Update vote count display
//       document.getElementById('voteCount').textContent = 'Votes: ' + voteCount;

//       // Optionally, you can provide feedback to the user that their vote was recorded
//       alert('Vote recorded!');
//   });

//   // Helper function to get votes from localStorage
//   function getVotes(imageTitle) {
//       var storedVotes = localStorage.getItem(imageTitle + '_votes');
//       return storedVotes ? parseInt(storedVotes) : 0;
//   }

//   // Helper function to set votes in localStorage
//   function setVotes(imageTitle, voteCount) {
//       localStorage.setItem(imageTitle + '_votes', voteCount.toString());
//   }
// });


// -------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  // Handle image click event
  var images = document.querySelectorAll('.image');
  images.forEach(function (image) {
      image.addEventListener('click', function () {
          console.log('Image clicked:', image);

          // Check if img element exists within the .image div
          var imgElement = image.querySelector('img');
          if (!imgElement) {
              console.error('No img element found within the .image div:', image);
              return;
          }

          var imageSrc = imgElement.getAttribute('src');
          var imageTitle = image.getAttribute('data-title');
          var imageSubheading = image.getAttribute('data-subheading');
          var imageDescription = image.getAttribute('data-description');

          // Update popup content
          document.getElementById('popupImage').setAttribute('src', imageSrc);
          document.getElementById('popupTitle').textContent = imageTitle;
          document.getElementById('popupSubheading').textContent = imageSubheading;
          document.getElementById('popupDescription').textContent = imageDescription;

          // Retrieve and display votes from localStorage
          var voteCount = getVotes(imageTitle);
          document.getElementById('voteCount').textContent = 'Votes: ' + voteCount;

          // Show popup
          document.getElementById('popup').style.display = 'block';
      });
  });

  // Handle close button click event
  document.getElementById('close').addEventListener('click', function () {
      document.getElementById('popup').style.display = 'none';
  });

  // Handle vote button click event
  document.getElementById('voteButton').addEventListener('click', function () {
      var imageTitle = document.getElementById('popupTitle').textContent;

      // Increment vote count and update localStorage
      var voteCount = getVotes(imageTitle);
      voteCount++;
      setVotes(imageTitle, voteCount);

      // Update vote count display
      document.getElementById('voteCount').textContent = 'Votes: ' + voteCount;

      // Optionally, you can provide feedback to the user that their vote was recorded
      alert('Vote recorded!');
  });

  // Helper function to get votes from localStorage
  function getVotes(imageTitle) {
      var storedVotes = localStorage.getItem(imageTitle + '_votes');
      return storedVotes ? parseInt(storedVotes) : 0;
  }

  // Helper function to set votes in localStorage
  function setVotes(imageTitle, voteCount) {
      localStorage.setItem(imageTitle + '_votes', voteCount.toString());
  }
});
