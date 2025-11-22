document.getElementById("searchBtn").addEventListener("click", function () {
    // Get the user input
    const query = document.getElementById("searchInput").value.trim();
    const resultDiv = document.getElementById("result");

    const safeQuery = encodeURIComponent(query);

    fetch(`superheroes.php?query=${safeQuery}`)
        .then(response => response.text())
        .then(data => {
            resultDiv.innerHTML = data;
        })
        .catch(error => {
            resultDiv.innerHTML = "Error fetching superhero data.";
            console.error(error);
        });
});