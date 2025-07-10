let themeToggle = document.getElementById("theme-toggle"); 
 
themeToggle.addEventListener("click", () => { 
  let isDark = document.body.classList.toggle("dark-mode"); 
  document.body.classList.toggle("light-mode", !isDark); 
 
  if (isDark) { 
    themeToggle.textContent = "Light mode"; 
    themeToggle.classList.remove("light"); 
  } else { 
    themeToggle.textContent = "Dark mode"; 
    themeToggle.classList.add("light"); 
  } 
 

  localStorage.setItem("theme", isDark ? "dark" : "light"); 
}); 
 

window.addEventListener("DOMContentLoaded", () => { 
  let savedTheme = localStorage.getItem("theme"); 
 
  if (savedTheme === "dark") { 
    document.body.classList.add("dark-mode"); 
    themeToggle.textContent = "Light Mode"; 
  } else { 
    document.body.classList.add("light-mode"); 
    themeToggle.textContent = "Dark Mode"; 
    themeToggle.classList.add("light"); 
  } 
});

let users = [
    {
        id: 1,
        usernames: 'Ibrohim ',
        userSurname: 'JOnkaev',
        age: 14,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        stars: '⭐⭐',
        coin: 20,
        quvvat: 2380,
        rank: 'bot',
        img: 'https://imgscdn.stargazete.com/imgsdisk/2021/01/15/16-ocak-2021-ibo-showun-b-460_2-41.jpg'
    },
    {
        id: 2,
        usernames: 'Fri ',
        userSurname: 'Firev',
        stars: '⭐⭐⭐⭐',
        age: 15,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '4321',
        ligin: '1234',
        coin: 2023,
        quvvat: 230,
        rank: '-bot',
        img: 'https://i01.fotocdn.net/s219/d23791ab6c5ac703/user_m/3002384431.jpg'

    },
    {
        id: 3,
        usernames: 'Joha ',
        userSurname: 'kaskatov',
        stars: '⭐⭐⭐⭐',
        age: 16,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '23234',
        ligin: '765456',
        coin: 0,
        quvvat: 200,
        rank: '+bot',
        img: 'https://avt-3.foto.mail.ru/inbox/javoh2013/_avatar180?1477661824&mrim=1'

    },
    {
        id: 4,
        usernames: 'Muham',
        userSurname: 'Muhamov',
        stars: '⭐⭐⭐⭐',
        age: 11,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '948903',
        ligin: '29349',
        coin: 2000,
        quvvat: 2,
        rank: 'superbot',
        img: 'https://egemen.kz/article_photo/1512704871_article_b.jpeg?width=600&height=315'
    },
    {
        id: 5,
        usernames: 'Omina',
        userSurname: 'Ominovich',
        stars: '⭐⭐⭐⭐',
        age: 69,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '9849389',
        ligin: '30209293',
        coin: 69,
        quvvat: 96,
        rank: 'BOt',
        img: 'https://static4.vivoo.ru/datas/photos/750x750/0b/c0/8a3935160b135040a6460240fc1b.jpg?0'
    },
    {
        id: 6,
        usernames: 'Aziza',
        userSurname: 'TamaEVA',
        stars: '⭐⭐⭐⭐',
        age: 25,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: 69692,
        ligin: 785795,
        coin: 'fitfilion',
        quvvat: 5,
        rank: 'MegaBot',
        img: 'https://i.ytimg.com/vi/adp42HTYYlU/maxresdefault.jpg'
    },
    {
        id: 7,
        usernames: 'Iska',
        userSurname: 'Isovich',
        stars: '⭐⭐⭐⭐',
        age: 1,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 0,
        quvvat: 100,
        rank: 'ZumkaBot',
        img: 'https://cdn1.img.sputniknews.uz/img/160/72/1607201_121:0:1464:844_1920x0_80_0_0_1895b2f344cad5fb930f2b148f1e8454.jpg'

    },
    {
        id: 8,
        usernames: 'Ziyo',
        userSurname: 'kol',
        age: 15,
        stars: '⭐⭐⭐⭐',
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '2346765',
        coin: 510,
        quvvat: 0,
        rank: 'JingaleBot',
        img: 'https://avatars.mds.yandex.net/i?id=1f74d5b8e5d41b964649d6d9c2641acf6c167eb5-9182224-images-thumbs&n=13'
    },
    {
        id: 9,
        usernames: 'Jaska',
        userSurname: 'Jaskayovich',
        age: 55,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        stars: '⭐⭐⭐⭐',
        password: '12345',
        ligin: '12345',
        coin: -1350,
        quvvat: -100,
        rank: 'GigaBot',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/50548160-d1b5-4f0e-b489-de9a2a2ecaa2/280x420'
    },
    {
        id: 10,
        usernames: 'ertan',
        userSurname: 'Emirhan',
        age: 55,
        group: 'F2-2495',
        stars: '⭐⭐⭐⭐',
        teacherName: 'Emirhan Ertan',
        password: '234124',
        ligin: '1254124',
        coin: 2200,
        quvvat: 10,
        rank: 'Old BOT',
        img: 'https://avatars.mds.yandex.net/i?id=40e97fa4305d2093450fcb82c1f5b478_l-5481592-images-thumbs&n=13'
    },
    {
        id: 11,
        usernames: 'OtashBT',
        userSurname: 'chatGPT',
        age: 55,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        stars: '⭐⭐⭐⭐',
        password: '12345',
        ligin: '12345',
        coin: 100,
        quvvat: 0,
        rank: 'CHat Bot'
    },
    {
        id: 12,
        usernames: 'ChocoPay',
        userSurname: 'SinChoPay',
        stars: '⭐⭐⭐⭐',
        age: 99,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 100,
        quvvat: 0,
        rank: 'vonka Bot'
    },

    {
        id: 14,
        usernames: 'Abu',
        userSurname: 'Uba',
        stars: '⭐⭐⭐⭐',
        age: 0,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '23456',
        coin: 1,
        quvvat: 0,
        rank: 'abu Bot'
    },
    {
        id: 14,
        usernames: 'EMir',
        userSurname: 'Senyor',
        stars: '⭐⭐⭐⭐',
        age: 1000,
        group: 'F2-2495',
        teacherName: 'Students',
        password: '3321',
        ligin: '66544',
        coin: 1158,
        quvvat: 0,
        rank: 'CHeburashka bot'
    },
]


let tastiq = document.querySelector('.submit-btn').addEventListener('click', (e) => {
    e.preventDefault()

    let loginID = document.querySelector('.loginId')
    let Pasword = document.querySelector('.Paswrod')

    let valueID = loginID.value
    let valuePasword = Pasword.value

    let findUser = users.find(e => Number(e.ligin) === Number(valueID) && Number(e.password) === Number(valuePasword))
    if (findUser) {
        let local = localStorage.setItem('studets', JSON.stringify(findUser))

        window.location.href = './about.html'
    } else {
    }


})
