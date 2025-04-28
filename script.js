const toggleButton = document.createElement('button');
toggleButton.innerText = "Toggle Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.top = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
