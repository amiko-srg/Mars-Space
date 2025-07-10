// let getUser = JSON.parse(localStorage.getItem('studets'))
// let avatar = document.querySelector('.avatar')
// let stars = document.querySelector('.stars')
// stars.textContent = getUser.stars
// avatar.src = getUser.img
// console.log(getUser);


let student = JSON.parse(localStorage.getItem('studets'));

if (!student) {
    document.body.innerHTML = "<h2 style='color:red;text-align:center;'>Foydalanuvchi topilmadi!</h2>";
} else {
    document.querySelector('.name').textContent = `${student.usernames} ${student.userSurname}`;
    document.querySelector('.group').textContent = `📘 ${student.group} | ${student.teacherName}`;
    document.querySelector('.coin-item').textContent = student.coin;
    document.querySelector('.xp-item').textContent = student.quvvat;
    document.querySelector('.stars').textContent = student.stars;
    
    let avatar = document.querySelector('.avatar')
    avatar.src = student.img
}




document.querySelector('.log_out').addEventListener('click', function () {
  // Удаляем данные пользователя
  localStorage.removeItem('loggedInUser'); // или localStorage.clear(), если всё нужно очистить

  // Перенаправляем на главную (страницу входа)
  window.location.href = './index.html';
});
