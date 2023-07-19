const API_key = "L2ZEQkgNGuOc3A-GzSPT_J85Gx8";
const API_url = "https://ci-jshint.herokuapp.com/";
const resultsModal = new bootstrap.Modal(document.getElementById('resultsModal'));

documents.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_url}?api_key=${API_key}`;

    const response = await fetch(getStatus);

    const data = await response.json();

    if (response.ok) {
        console.log(data);
    }
}