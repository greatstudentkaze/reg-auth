const authBtn = document.querySelector('.js-auth');

authBtn.addEventListener('click', function () {
  const loginName = prompt('Введите логин: ', 's4nyan0j'),
    loginPass = prompt('Введите пароль: ', 'gr34tp4ss!337');

  let isUserFound;
  userLog.forEach(function (item) {
    if (item.userName === loginName) isUserFound = item;
  });

  if (isUserFound) {
    if (isUserFound.password === loginPass) {
      greetingName.textContent = isUserFound.firstName;
    } else {
      greetingName.textContent = 'Аноним';
      alert('Проверьте правильность написания пароля');
    }
  } else {
    greetingName.textContent = 'Аноним';
    alert('Пользователь не найден');
  }
});
