document.getElementById('myButton').addEventListener('click', function() {
    var myDiv = document.getElementById('myDiv');
    if (myDiv.style.display === 'none' || myDiv.style.display === '') {
        myDiv.style.display = 'block';
    } else {
        myDiv.style.display = 'none';
    }
});
