document.addEventListener('DOMContentLoaded', () => {
    const btnNao = document.getElementById('btn-nao');
    const container = document.querySelector('.container');

    document.getElementById('btn-sim').addEventListener('click', () => {
        alert('Te amo! ❤️');
    });

    btnNao.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const btnRect = btnNao.getBoundingClientRect();

        const newX = Math.random() * (containerRect.width - btnRect.width);
        const newY = Math.random() * (containerRect.height - btnRect.height);

        btnNao.style.position = 'absolute';

        btnNao.style.left = `${newX}px`;
        btnNao.style.top = `${newY}px`;
    });
});