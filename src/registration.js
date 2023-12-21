// Таблица пользователей Users (name,surname,login,password,Email)
// удалить из локального репозитория.
localStorage.removeItem('Users.json'); //если вдруг будет необходимо удалить из базы пользователей.
//таблица пользователей.
var Users =[];
//если таблица еще не создана то создать таблицу пользователей.
if(!localStorage.getItem("Users.json"))
{
    //создаем запись json
   var  data ={
        name: 'Alice',
        surname:'Gazizullina',
        password: '',
        email:'digpig@gmai.ru',
        basket: []
    };
    var data2 ={
        name: 'Marina',
        surname:'Belochia',
        password:'1',
        email:'MBel7@mail.ru',
        basket: []
    };
    Users.push(data);
    Users.push(data2);
    var jasonRecord = JSON.stringify(Users);
    localStorage.setItem('Users.json', jasonRecord);
}
 // инициализируем таблицу Users
var jasonData =localStorage.getItem('Users.json')
Users = JSON.parse(jasonData);


//получаем элементы страницы 
var client = document.getElementById('forename');
var surname = document.getElementById('surname');
var login = document.getElementById('login');
var password = document.getElementById('password');
var verifecationPassword = document.getElementById('verifecationPassword');
var EmailUser = document.getElementById('EmailUser');
var chxСonfirmation =document.getElementById('chxСonfirmation');

//по нажатию на кнопку проверяем корректность занесения данных и сохраняем в Users.
document.getElementById('btnRegisration').addEventListener('click',function(){
    console.log(client.value);
    console.log(surname.value);
    console.log(login.value);
    console.log(password.value);
    console.log(verifecationPassword.value);
    if(password.value!=verifecationPassword.value)
    {
        window.alert("пароль и подтверждение пароля не совпадают, операция регестрации прервана.");
    }
    console.log(EmailUser.value);
    console.log(chxСonfirmation.value);
    //save Users
})




