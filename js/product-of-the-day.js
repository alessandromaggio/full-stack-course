async function loadPOD() {
  try {
    const response = await axios('pod.json');
    document.getElementById('pod').innerHTML = response.data.text;
  } catch (error) {
    console.log(error);
  }
}

loadPOD();