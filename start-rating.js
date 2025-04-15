const containers = document.querySelectorAll('.star-container');

containers.forEach((container, idx) => {
    container.addEventListener('mouseover', () => {
        for (let i = 0; i <= idx; i++) {
            containers[i].classList.add('hover');
        }
        for (let i = idx + 1; i < containers.length; i++) {
            containers[i].classList.remove('hover');
        }
    });

    container.addEventListener('mouseout', () => {
        containers.forEach(c => c.classList.remove('hover'));
    });
});
