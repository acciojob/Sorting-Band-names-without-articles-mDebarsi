//your code here

// Given array of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'Nirvana', 'Aerosmith', 'The Rolling Stones', 'Pink Floyd'];

// Function to sort and filter the band names
function sortAndFilterBandNames(bandNames) {
  // Define the articles to be excluded
  const articles = ['a', 'an', 'the'];

  // Custom sorting function
  function customSort(a, b) {
    // Function to remove articles and trim the band names
    function removeArticlesAndTrim(name) {
      for (const article of articles) {
        if (name.startsWith(article + ' ')) {
          return name.slice(article.length + 1).trim();
        }
      }
      return name;
    }

    const nameA = removeArticlesAndTrim(a.toLowerCase());
    const nameB = removeArticlesAndTrim(b.toLowerCase());

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  }

  // Sort the band names using the custom sorting function
  bandNames.sort(customSort);
}

// Call the function to sort and filter the band names
sortAndFilterBandNames(bandNames);

// Get the ul element by its id
const ul = document.getElementById('band');

// Iterate through the sorted band names and add them to the ul as li elements
bandNames.forEach((bandName) => {
  const li = document.createElement('li');
  li.textContent = bandName;
  ul.appendChild(li);
});
