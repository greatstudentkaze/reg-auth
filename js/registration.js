'use strict';

const regBtn = document.querySelector('.js-reg'),
  userLogList = document.querySelector('.log__list'),
  greetingName = document.querySelector('.greeting__name');

const userLog = JSON.parse(localStorage.getItem('user-log')) || [];

const isUserFound = function (userName) {
  let isUserFound = false;

  userLog.forEach(function (item) {
    if (item.userName === userName) isUserFound = true;
  });

  return isUserFound;
}

const render = function () {
  if (userLog.length === 0) userLogList.textContent = 'Нет зарегистрированных пользователей :(';
  else userLogList.textContent = '';

  userLog.forEach(function (item) {
    const elem = document.createElement('li');
    elem.classList.add('log__item', 'user');

    elem.innerHTML = `<p class="user__option">
                        Имя: <span class="user__name">${item.firstName}</span>
                      </p>
                      <p class="user__option">
                        Фамилия: <span class="user__lastname">${item.lastName}</span>
                      </p>
                      <p class="user__option">
                        Зарегистрирован: <span class="user__reg-date">${item.regDate}</span>
                      </p>
                      <button class="button user__remove js-remove-user">Удалить</button>`;

    userLogList.append(elem);

    const userRemoveBtn = elem.querySelector('.js-remove-user');
    userRemoveBtn.addEventListener('click', function () {
      userLog.splice(userLog.indexOf(item), 1);
      localStorage.setItem('user-log', JSON.stringify(userLog));
      render();
    });
  });
};

regBtn.addEventListener('click', function () {
  const regExp = /^[A-Za-zА-ЯЁа-яё]+ [A-Za-zА-ЯЁа-яё]+$/gi;
  let name, username, password;

  do {
    name = prompt('Введите имя и фамилию', 'Саша Петров');
    if (name === null) return;
  } while (!regExp.test(name.trim()));

  do {
    username = prompt('Введите логин', 's4nyan0j');
    if (username === null) return ;
  } while (!/^\S+$/.test(username.trim()) || isUserFound(username));

  do {
    password = prompt('Введите пароль', 'gr34tp4ss!337');
    if (password === null) return ;
  } while (!/^\S+$/.test(password.trim()));

  const user = {
    id: `4u7hr3g${(+new Date).toString(16)}Nkln3a1`,
    firstName: name.split(' ')[0],
    lastName: name.split(' ')[1],
    userName: username,
    password: password,
    regDate: new Date().toLocaleString('ru', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  };

  userLog.push(user);
  localStorage.setItem('user-log', JSON.stringify(userLog));

  greetingName.textContent = user.firstName;
  render();
});

render();
