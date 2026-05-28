// Scroll to topup section

function scrollToTopup() {

    document.getElementById("topup")
    .scrollIntoView({
        behavior: "smooth"
    });

}

// Form submit

document.getElementById("topupForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Your top up order has been submitted successfully!");

});