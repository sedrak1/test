function clickBlanco() {
    let currentDiv = document.getElementById("drinkImg");
    if (currentDiv.className !== "blanco") {
        let blancoDescription = document.getElementById("blancoDescription");
        let reposadoDescription = document.getElementById(
            "reposadoDescription"
        );
        let anejoDescription = document.getElementById("anejoDescription");
        let blancoButton = document.getElementById("blancoDiv");
        let reposadoButton = document.getElementById("reposadoDiv");
        let anejoButton = document.getElementById("anejoDiv");

        blancoDescription.style.display = "block";
        reposadoDescription.style.display = "none";
        anejoDescription.style.display = "none";
        blancoButton.style.backgroundColor = "#294630";
        reposadoButton.style.backgroundColor = "#405A46";
        anejoButton.style.backgroundColor = "#405A46";
        blancoButton.style.color = "#F3F0E9";
        reposadoButton.style.color = "#E0E6B6";
        anejoButton.style.color = "#E0E6B6";
        currentDiv.className = "blanco";
    }
}
function clickReposado() {
    let currentDiv = document.getElementById("drinkImg");
    if (currentDiv.className !== "reposado") {
        let blancoDescription = document.getElementById("blancoDescription");
        let reposadoDescription = document.getElementById(
            "reposadoDescription"
        );
        let anejoDescription = document.getElementById("anejoDescription");
        let blancoButton = document.getElementById("blancoDiv");
        let reposadoButton = document.getElementById("reposadoDiv");
        let anejoButton = document.getElementById("anejoDiv");

        blancoDescription.style.display = "none";
        reposadoDescription.style.display = "block";
        anejoDescription.style.display = "none";
        blancoButton.style.backgroundColor = "#405A46";
        reposadoButton.style.backgroundColor = "#294630";
        anejoButton.style.backgroundColor = "#405A46";
        blancoButton.style.color = "#E0E6B6";
        reposadoButton.style.color = "#F3F0E9";
        anejoButton.style.color = "#E0E6B6";
        currentDiv.className = "reposado";
    }
}

function clickAnejo() {
    let currentDiv = document.getElementById("drinkImg");
    if (currentDiv.className !== "anejo") {
        let blancoDescription = document.getElementById("blancoDescription");
        let reposadoDescription = document.getElementById(
            "reposadoDescription"
        );
        let anejoDescription = document.getElementById("anejoDescription");
        let blancoButton = document.getElementById("blancoDiv");
        let reposadoButton = document.getElementById("reposadoDiv");
        let anejoButton = document.getElementById("anejoDiv");

        blancoDescription.style.display = "none";
        reposadoDescription.style.display = "none";
        anejoDescription.style.display = "block";
        blancoButton.style.backgroundColor = "#405A46";
        reposadoButton.style.backgroundColor = "#405A46";
        anejoButton.style.backgroundColor = "#294630";
        blancoButton.style.color = "#E0E6B6";
        reposadoButton.style.color = "#E0E6B6";
        anejoButton.style.color = "#F3F0E9";
        currentDiv.className = "anejo";
    }
}
