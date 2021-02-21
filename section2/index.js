const fs = require('fs');
const mime = require('mime-types');
const searchRecipes = require('./recipe_search');
const http = require('http');


function requestListener(req, res) {
  // Parse the url to extract the query string parameters.
  // The full url will be something like this:  http://localhost:3000?search=cookie
  const fullUrl = 'http://' + req.headers.host + req.url;
  const urlObject = new URL(fullUrl);
  const searchString = urlObject.searchParams.get('search');

  let data = searchRecipes(searchString);

  // Send the response as JSON:
  let mimeType = mime.lookup('json');
  res.writeHead(200, {'Content-type': mimeType});
  res.end(JSON.stringify(data));
}

// Create the http server and start listening on a port:
const server = http.createServer(requestListener);
server.listen(8000);
