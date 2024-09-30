const clientNames = document.querySelectorAll(".client-header h3");
const goLeft = document.querySelector(".goLeft");
const goRight = document.querySelector(".goRight");
const clients = document.querySelectorAll(".client");

let count = 0;
clients[count].classList.add("active");

for (let i = 0; i < clientNames.length; i++) {
    let clientName = clientNames[i];

    let clientImg =
        clientName.parentElement.parentElement.children[0].children[0];

    let img = clientName.innerHTML[0];

    clientImg.innerHTML = img;
}

goLeft.addEventListener("click", function() {
    count--;

    if (count < 0) {
        count = 2;
    }
    clients[count].classList.add("active");
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] != clients[count]) {
            clients[i].classList.remove("active");
        }
    }
});

goRight.addEventListener("click", function() {
    count++;

    if (count > 2) {
        count = 0;
    }
    clients[count].classList.add("active");
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] != clients[count]) {
            clients[i].classList.remove("active");
        }
    }
});