const mainInput = document.querySelector('#head-input');
const mainButton = document.querySelector('#head-btn');
const headOl = document.querySelector('#head-ol');

function addText () {
    let li = document.createElement('li');
    li.className = 'li-list';
    li.innerText = mainInput.value;
    headOl.append(li);
    mainInput.value = null;
    mainButton.innerHTML = 'One more thing!';
}

mainButton.addEventListener('click', addText);