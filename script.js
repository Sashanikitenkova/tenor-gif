const loadBtn = document.getElementById("loadBtn");

loadBtn.addEventListener('click', function() {

    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.trim();
    const apiKey = "AIzaSyCc1Oe7FiB5xEXZ5oDbenAEVi_1DBTOBdk";

    if(!query) return; // if empty we do nothing

    let http = new XMLHttpRequest();
    http.open('GET', `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(query)}&key=${apiKey}&limit=8`, true);
    http.send();
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200) {
            let data = JSON.parse(http.response);
            const container = document.getElementById("results");
            container.innerHTML = "";
            
            data.results.forEach(gif => {
                col = document.createElement("div");
                col.className = "col-md-3 mb-4";

                const img = document.createElement("img");
                img.src = gif.media_formats.gif.url;
                img.alt = gif.content_description || "GIG";
                img.className = "img-fluid gif-preview rounded shadow";

                col.appendChild(img);
                container.appendChild(col);
            })

            searchInput.value = "";
        }
    }

})














// AIzaSyA-b8w7UlT98knfUOPob5AT4A-pn5riC2s