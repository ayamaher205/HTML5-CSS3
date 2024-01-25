const image = document.getElementById("image");
        const buttons = document.querySelectorAll("button");

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                image.className =`${button.innerHTML}`;
            });
        });