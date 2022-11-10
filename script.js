// Создать класс Car, который имеет поля model, color, year, и методы
// engineStart и engineStop.

// Методы должны работать по такому принципу: при вызове engineStart,
// нужно выводить сообщение «Red Mercedes 2014 engine started»,
// используя данные созданной машины. EngineStop должен работать по
// такому же принципу.

// Нужно создать два разных объекта машин с помощью этого класса, и
// вызвать методы этих объектов.

// Загрузите ссылку на гитхаб-репозиторий.

// class Car{
//     constructor(model, color, year){
//         this.model = model;
//         this.color = color;
//         this.year = year;
//     };

//     engineStart(){
//         console.log(`${this.model} ${this.color} ${this.year} engine started`);
//     };

//     engineStop(){
//         console.log(`${this.model} ${this.color} ${this.year} engine stopped`);
//     };
// }

// let autoRed = new Car(`Red`, `Mercedes`, `2014`);
// autoRed.engineStart();
// autoRed.engineStop();
// let autoWhite = new Car(`White`, `Mercedes`, `2014`);
// autoWhite.engineStart();
// autoWhite.engineStop();