//Displaying the date
function displayDate() {
    const today = new Date();
    const dateStr = today.toDateString();
    document.getElementById("date").innerHTML = ` ${dateStr}`;
}
displayDate();

//Adding accordion buttons
const acc = document.querySelectorAll(".accordion");
acc.forEach(button => {
    button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});