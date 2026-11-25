let heading = document.querySelector("h2");
        let inputs = document.getElementsByClassName("input");
        let form = document.getElementById("loginForm");

        // Changing Properties
        heading.style.color = "blue";
        heading.style.fontSize = "25px";
        // Form Manipulation
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let email = document.getElementById("email").value;
alert("Login Successful! Welcome " + email);
        });