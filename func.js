document.addEventListener("DOMContentLoaded", function () {
    let applyButton = document.createElement("div");
    applyButton.classList.add("apply");
    applyButton.innerText = "Apply Now";

    // Redirect on click
    applyButton.addEventListener("click", function () {
        window.open("https://admissions.kluniversity.in/", "_blank");
    });

    document.body.appendChild(applyButton);
});