const input = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");
input.addEventListener("input", () => {
    letterCount.textContent = input.value.length; // Count letters
});