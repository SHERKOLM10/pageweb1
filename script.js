const panels = document.querySelectorAll('.panel');
const descriptionBox = document.getElementById('description');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        const description = panel.getAttribute('data-description');
        descriptionBox.textContent = description;
        descriptionBox.style.display = 'block';
    });
});


