//Displaying the date
function displayDate() {
    const today = new Date();
    const dateStr = today.toDateString();
    document.getElementById("date").innerHTML = ` ${dateStr}`;
}
displayDate();

/*Accordion buttons*/
const acc = document.querySelectorAll(".accordion");
acc.forEach(button => {
    button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});

/*Image LightBox*/
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImage");
document.querySelectorAll(".staffImage").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src.replace("100", "600");
        lightbox.style.display = "flex";
    });
});
lightbox.addEventListener("click", () => lightbox.style.display = "none");

//Form Input validation
const form = document.getElementById('enquiryForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Simple form validation
    const inpName = form.inpName.value.trim();
    const inpEmail = form.inpEmail.value.trim();
    const inpNumber = form.inpNumber.value.trim();
    const inpMessage = form.inpMessage.value.trim();
    
    if (!inpName || !inpEmail || !inpNumber || !inpMessage) {
        alert("Fill in all required fields");
        return;
    }

    // Show success message and clear form
    successMessage.style.display = 'block';
    form.reset();
});