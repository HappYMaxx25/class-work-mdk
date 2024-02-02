let show = (st) => {
    console.log(`Имя:${st.name}`);
    console.log(`Возраст:${st.age}`);
    console.log(`Хобби:${st.hobbies}`);
    console.log("Контакты: ");
    for(let contact in st.contacts){
        console.log(contact);
        console.log(`${st.contacts[contact]}`);
    }
}
const Harry = {
    name: "Max",
    age: 17,
    hobbies:["Играть","Спать","Кушать"],
    contacts:{
        phone:["+793756920280"," +79375692020"],
        email:["maxx.rock0678@mail.ru"," maxx.gorunov25@mail.ru"],
        social:["www.github.com"," VK.ru"],
        live:["Триумфальная.26"," Поддубного.18"]
    }
}
show(Harry)