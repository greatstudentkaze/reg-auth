const authBtn = document.querySelector('.js-auth');

authBtn.addEventListener('click', function () {
  const loginName = prompt('Введите логин: ', 's4nyan0j'),
    loginPass = prompt('Введите пароль: ', 'gr34tp4ss!337');

  let user;
  userLog.forEach(function (item) {
    if (item.userName === loginName) user = item;
  });

  if (user) {
    if (user.password === loginPass) {
      greetingName.textContent = user.firstName;
    } else {
      greetingName.textContent = 'Аноним';
      alert('Проверьте правильность написания пароля');
    }
  } else {
    greetingName.textContent = 'Аноним';
    alert('Пользователь не найден');
  }
});
