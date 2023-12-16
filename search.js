/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  function toggleSearch() {
    const dropdown = document.querySelector('.dropdown-search');
    const dropdownContent = document.querySelector('.dropdown-content-search');
    const searchInput = document.getElementById('myInput');

    // Toggle visibility of dropdown content and search input
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block';
        dropdownContent.style.left = 'unset';
        dropdownContent.style.right = '100%'; // Position the dropdown to the right of the magnifying glass emoji
        searchInput.focus(); // Focus on the input field
    } else {
        dropdownContent.style.display = 'none';
    }
}

/// Function to handle mouseout event for the search container
function handleMouseOut() {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput'); 

  // If the mouse moves out of the search container, display the search button
  searchBtn.style.display = 'inline-block';
  searchInput.style.display = 'none';
}

// Function to handle mouseover event for the search container
function handleMouseOver() {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');

  // If the mouse hovers over the search container, display the search input
  searchBtn.style.display = 'none';
  searchInput.style.display = 'block';
}