// class Person {                         //  1.0
//     constructor(name, age, gender) {
//         this.name = name,
//             this.age = age,
//             this.gender = gender
//     }
//     sayHello() {
//         return `Привет меня зовут ${this.name}, Мне ${this.age} лет`
//     }
// }
// let a = new Person("A'loxon", 14, 'Мальчик')
// document.write(a.sayHello())


// class Person {                        // 1.1
//     constructor(name, age, gender) {
//         this.name = name,
//             this.age = age,
//             this.gender = gender
//     }
//     sayHello() {
//         return `Привет меня зовут ${this.name}, Мне ${this.age} лет`
//     }
// }
// let a = new Person("A'loxon", 14, 'Мальчик')
// class Student extends Person{
//     constructor(name,age,gender,course){
//         super(name,age,gender)
//         this.course = course
//     }
//     introduce(){
//         return `Привет меня зовут ${this.name},Я учусь на ${this.course} курсе`
//     }
// }
// let b = new Student("A'loxon",14,'Мальчик',3)
// document.write(b.introduce())


// function change()         // 1.2
// {
//     document.getElementById('header').innerHTML = 'Измененный текст'
// }


// function red()      // 1.3
// {
//     document.getElementById('text').style.color = 'red'
// }
// function yellow()
// {
//     document.getElementById('text').style.color = 'yellow'
// }
// function blue()
// {
//     document.getElementById('text').style.color = 'blue'
// }


// document.getElementById("toggleButton").addEventListener("click", function() {       // 1.4
//     const content = document.getElementById("content");
//     const button = document.getElementById("toggleButton");

//     if (content.style.display === "none") {
//         content.style.display = "block";
//         button.textContent = "Скрыть текст";
//     } else {
//         content.style.display = "none";
//         button.textContent = "Показать текст";
//     }
// });


// let a = 0        // 1.5
// document.getElementById('counterButton').addEventListener('click',function(){
//     a++;
//     document.getElementById('counter').textContent = a
// })
