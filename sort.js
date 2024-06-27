document.addEventListener("DOMContentLoaded", function() {
  var sortButton = document.getElementById("sortButton");
  var sortOptions = document.getElementById("sortOptions");
  var filterButton = document.getElementById("filterButton");
  var filterOptions = document.getElementById("filterOptions");

  sortButton.addEventListener("click", function() {
     
      if (sortOptions.style.display === "block") {
          sortOptions.style.display = "none";
      } else {
          sortOptions.style.display = "block";
          filterOptions.style.display = "none"; 
      }
  });

  filterButton.addEventListener("click", function() {
      
      if (filterOptions.style.display === "block") {
          filterOptions.style.display = "none";
      } else {
          filterOptions.style.display = "block";
          sortOptions.style.display = "none"; 
      }
  });

 
  window.addEventListener("click", function(event) {
      if (!event.target.matches('#sortButton') && !event.target.matches('#filterButton')) {
          if (sortOptions.style.display === "block") {
              sortOptions.style.display = "none";
          }
          if (filterOptions.style.display === "block") {
              filterOptions.style.display = "none";
          }
      }
  });
});
