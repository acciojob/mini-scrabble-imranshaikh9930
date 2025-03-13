//your code here

const input = document.querySelector("#evaluatedText");
// const letterCount = document.querySelector("#letterCount");

 const input = document.getElementById("evaluatedText");
        const letterCount = document.getElementById("letterCount");

        // Update letter count in real-time
        input.addEventListener("input", () => {
            letterCount.innerText = input.value.length; // Count letters
        });