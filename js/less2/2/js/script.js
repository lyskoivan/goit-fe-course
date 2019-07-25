'use strict'
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
while ( attemptsLeft > 0 ) {
    const passwordAttempt = prompt('Введите пароль');
    if ( passwords.includes(passwordAttempt) === true ) {
        alert('Добро пожаловать!');
        break;
    }
    else if ( passwordAttempt === null ) {
        break;
    }
    else if ( passwords.includes(passwordAttempt) === false ) {
        attemptsLeft = attemptsLeft - 1;
        if (attemptsLeft === 0) {
            alert('У вас закончились попытки, аккаунт заблокирован!');
        }
        else {
            alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
        }
    }
}