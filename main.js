let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0

function increment() {
    count++;
    countEl.innerHTML = count;

}

function save() {
    let countstr = count + ' - '
    saveEl.innerHTML += countstr;
    countEl.textContent = 0;
    count = 0
}



