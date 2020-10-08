axios.get('pod.json')
  .then(function (response) {
    document.getElementById('pod').innerHTML = response.data.text;
  }).catch(function (error) {
    console.log(error)
  });