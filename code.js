let button = document.getElementById("btn");
let out = document.getElementById("output")
let t_out = document.getElementById("time")

button.addEventListener("click", () => {

    t_out.innerText = "Loading... pls wait"

    navigator.geolocation.getCurrentPosition(
        (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            out.innerText = `lat: ${lat}, lon: ${lon}`;

            out.style.color = "white";

            const now = new Date();

            t_out.innerText = `Update Time => ${now.toLocaleTimeString()} , ${now.toLocaleDateString()}`; 
        },
        () => {
            out.innerText = "Bradar ts is not allow";

            out.style.color = "red";

            t_out.innerText = "Error"
        }
    );
});