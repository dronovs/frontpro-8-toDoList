const mainInput = document.querySelector('#head-input');
const mainButton = document.querySelector('#head-btn');
const headUl = document.querySelector('#head-ul');

function addText () {
    let li = document.createElement('li');
    li.className = 'li-list';
    li.innerText = mainInput.value;
    headUl.append(li);
    mainInput.value = null;
    mainButton.innerHTML = 'One more thing!';
}

mainButton.addEventListener('click', addText);