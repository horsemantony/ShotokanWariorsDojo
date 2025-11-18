//Displaying the date
function displayDate() {
    const today = new Date();
    const dateStr = today.toDateString();
    document.getElementById("date").innerHTML = ` ${dateStr}`;
}
displayDate();

