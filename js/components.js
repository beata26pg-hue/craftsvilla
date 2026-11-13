async function loadComponent(selector, file) {
    const element = document.querySelector(selector);

    if (!element) return;

    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Could not load ${file}`);
        }

        element.innerHTML = await response.text();

    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("#header", "components/header.html");
    await loadComponent("#footer", "components/footer.html");
});