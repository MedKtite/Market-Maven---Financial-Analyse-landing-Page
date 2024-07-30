document.addEventListener('DOMContentLoaded', function() {
    const openIcon = document.getElementById('open');
    const closeIcon = document.getElementById('close');
    const nav = document.getElementById('navbar').querySelector('ul');

    openIcon.addEventListener('click', function() {
        nav.style.display = 'flex';
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        nav.style.display = 'none';
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});
