document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector(".hero .btn");
    const overlay = document.getElementById("editorOverlay");
    const closeBtn = document.getElementById("editorClose");
    const swatches = document.querySelectorAll(".swatch");
    const parts = document.querySelectorAll(".sneaker-part");

    let selectedColor = "#FFFFFF";

    openBtn.addEventListener("click", () => {
        overlay.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("active");
        }
    });

    swatches.forEach(swatch => {
        swatch.addEventListener("click", () => {
            swatches.forEach(s => s.classList.remove("selected"));
            swatch.classList.add("selected");
            selectedColor = swatch.dataset.color;
        });
    });

    parts.forEach(part => {
        part.addEventListener("click", () => {
            if (part.tagName === "g") {
                part.querySelectorAll("rect, path").forEach(child => {
                    child.setAttribute("fill", selectedColor);
                });
            } else {
                part.setAttribute("fill", selectedColor);
            }
        });
    });

    document.getElementById("editorOrderBtn").addEventListener("click", () => {
        overlay.classList.remove("active");
        document.querySelector(".order-section").scrollIntoView({ behavior: "smooth" });
    });
});