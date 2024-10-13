let counter = 0;
let intervalId;
let likes = {};
let isPaused = false;

window.onload = function() {
    intervalId = setInterval(() => {
        counter++;
        document.getElementById('counter').innerText = counter;
    }, 1000);
};

document.getElementById('plus').addEventListener('click', () => {
    counter++;
    document.getElementById('counter').innerText = counter;
});

document.getElementById('minus').addEventListener('click', () => {
    counter--;
    document.getElementById('counter').innerText = counter;
});

document.getElementById('heart').addEventListener('click', () => {
    if (!likes[counter]) {
        likes[counter] = 0;
    }
    likes[counter]++;
    const likesList = document.querySelector('.likes');
    const likeItem = document.createElement('li');
    likeItem.innerText = `${counter} has ${likes[counter]} like(s)`;
    likesList.appendChild(likeItem);
});

document.getElementById('pause').addEventListener('click', () => {
    if (!isPaused) {
        clearInterval(intervalId);
        document.getElementById('pause').innerText = 'Resume';
        document.getElementById('minus').disabled = true;
        document.getElementById('plus').disabled = true;
        document.getElementById('heart').disabled = true;
        isPaused = true;
    } else {
        intervalId = setInterval(() => {
            counter++;
            document.getElementById('counter').innerText = counter;
        }, 1000);
        document.getElementById('pause').innerText = 'Pause';
        document.getElementById('minus').disabled = false;
        document.getElementById('plus').disabled = false;
        document.getElementById('heart').disabled = false;
        isPaused = false;
    }
});

document.getElementById('comment-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh
    const commentInput = document.getElementById('comment-input');
    const comment = commentInput.value;
    const commentList = document.getElementById('list');
    const newComment = document.createElement('div');
    newComment.innerText = comment;
    commentList.appendChild(newComment);
    commentInput.value = ''; // Clear the input
});
