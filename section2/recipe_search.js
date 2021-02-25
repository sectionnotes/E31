const fs = require('fs');

const recipes = fs.readFileSync('mamba.json', 'utf8');
const recipesArray = JSON.parse(recipes);

// console.log(recipesArray);

function searchRecipes(searchTerm) {
  let data = { results: [] };

  if (searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    for (let i=0; i<recipesArray.length; i++) {
      if (recipesArray[i].recipename.toLowerCase().includes(searchTerm)) {
        // Found a match, save it into the results array.
        data.results.push(recipesArray[i]);
      }
    }
  }

  // data.results=recipesArray.filter(r=>r.recipename.toLowerCase().includes(searchTerm));

  // I've completed the search, so I'm just going to put the number of
  // matches into a "count" field of my data object.
  data.count = data.results.length;

  return data;
}

module.exports = searchRecipes;
