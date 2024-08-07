document.getElementById('button').addEventListener('click', function() {
    var dropMenu = document.getElementById('drop-menu');
    if (dropMenu.style.display === 'none' || dropMenu.style.display === '') {
        dropMenu.style.display = 'block';
    } else {
        dropMenu.style.display = 'none';
    }
});
