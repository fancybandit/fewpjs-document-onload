document.addEventListener("DOMContentLoaded", function(e) {
    const p = document.getElementById("text");
    p.textContent = "This is really cool!";
});

console.log(
    "This logs before DOMContentLoaded is triggered, despite being written after the event listener statement"
);