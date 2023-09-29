
let userName = inputUserName();
while (!userName || userName === "") {
    alert(`Введите корректное имя`);
    userName = inputUserName();
}

let age = inputAge();
while (!age || age === "" || isNaN(+age) || +age < 0) {
    alert(`Введите корректный возраст`);
    age = inputAge();
}

const upUsername = userName.charAt(0).toUpperCase() + userName.slice(1);
const message = `Привет, ${upUsername}, тебе уже ${age} лет!`
alert(message);

function inputUserName() {
    return prompt('Как вас зовут?');
}

function inputAge() {
    return prompt('Сколкьо вам лет?');
}