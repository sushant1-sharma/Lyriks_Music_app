const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4edeeed9f8msh03cd76845c98c0cp1213a3jsn43c12492a85e',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};

fetch('https://shazam.p.rapidapi.com/charts/track', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));