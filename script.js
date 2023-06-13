
        function success(response) {
            const decodedCredential = jwt_decode(response.credential);
            document.body.innerHTML = `<div class="container">
        <div id="nameNimg">
            <img id="dp" src="${decodedCredential.picture}" alt="Your Image Here 🙂"><br><br>
            <h1 id="firstName">Hey, ${decodedCredential.given_name}</h1>
        </div>

        <div class="row1">
            <div class="mb-3 mt-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" value="${decodedCredential.name}"
                    placeholder="Your name...">
            </div>

            <div class="mb-3 mt-3">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" value="${decodedCredential.email}" readonly class="form-control" id="email">
            </div>
        </div>

        <div class="row2">
            <div class="mb-3 mt-3">
                <label for="pass" class="form-label">Password</label>
                <input autofocus type="password" placeholder="Must have atleast 8 Characters" required name="pass"
                    class="form-control" id="pass">
            </div>

            <div class="mb-3 mt-3">
                <label for="Cpass" class="form-label">Confirm Password</label>
                <input type="password" placeholder="Confirm here" required name="cpass" class="form-control" id="Cpass">
            </div><br>
        </div>

        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" oninput="showpass()" id="showPass">
            <label class="form-check-label" for="showPass">Show password</label>
            <button type="button" class="btn btn-secondary makePass" onclick="generatePass()">Suggest Password</button>
        </div>
        <div class="consent">
            By submitting my details, I agree to our <a href="https://www.example.com">Privacy Policy</a> and <a
                href="https://www.example.com">Terms of usage</a> of data
        </div><br>

        <button id="submit" onclick="hidepass()" type="submit" class="btn btn-primary">Create my free Account</button>

    </div>`;
        }

        id = (str) => {
            return document.getElementById(str);
        }

        function generatePass() {
            const uppercase = [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
            ];
            const lowercase = [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
            ];
            const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            let password = "";

            arr = [numbers, lowercase, uppercase];

            for (i = 0; i < 16; i++) {
                rac = arr[rand(3)]; // Random Array of Characters
                makePassword(rac[rand(rac.length)]);
            }

            function makePassword(str) {
                password = password.concat(str);
            }

            id("pass").value = password;
            id("Cpass").value = password;
            if (!id("showPass").checked)
                id("showPass").click();
        }

        function rand(num) {
            return Math.floor(Math.random() * num);
        }

        function showpass() {
            checkbox = document.getElementById('showPass');
            if (checkbox.checked) {
                document.getElementById("pass").type = "text";
                document.getElementById("Cpass").type = "text";
            }
            else {
                document.getElementById("pass").type = "password";
                document.getElementById("Cpass").type = "password";
            }
        }
        function hidepass() {
            document.getElementById("pass").type = "password";
            document.getElementById("Cpass").type = "password";
        }
