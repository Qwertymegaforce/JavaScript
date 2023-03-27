// Задание 1. Функция, которая принимает в качестве аргумента объект и выводит только его собственные ключи и значение.

const parentObj = {
    key1 : 'value1',
    key2 : 'value2',
    key3 : 'value3'
};

const childObj = Object.create(parentObj);

childObj.key4 = 'value4';
childObj.key5 = 'value5';
childObj.key6 = 'value6';

function showKeysValues(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(key)
            console.log(obj[key])
        };
    };

};

console.log('Задание 1. Вывод собственных ключей и значений объекта. К родительскому относятся ключи и значения 1-3, к наследнику 4-6');
console.log('Родитель', parentObj);
console.log('Наследник', childObj, 'ниже ключи и значения наследника');
showKeysValues(childObj);

// Задание 2. Функция принимает на вход строку и объект, и проверяет, если ли у объекта свойство с именем, указанным в строке.

const testObj = {
    test : 'This is Test',
};

function checkProperty(property, obj){
    for(let key in obj){
        if(obj.hasOwnProperty(property)){
            console.log('Такое свойство есть')
            return true
        };
    };
    console.log('Такого свойства нет')
    return false
};
console.log('Задание 2. Тестируемый объект', testObj, 'Строка "test"');
checkProperty('test', testObj)

// Задание 3. Функция, создающая пустой объект, без прототипа. 

function createObject (){
    return Object.create(null)
}

console.log('Задание 3. Пустой объект - null. Создадим такой объект с именем "a" и получим его прототип');
a = createObject()
console.log(Object.getPrototypeOf(a));


// Задание 4. Создать родительский объект, наследовать, создать у наследников уникальный методы, вывести все в консоль

function switchPower(){
    this.powerOn = function(){
        console.log('Прибор включен')
    };
    this.powerOff = function(){
        console.log('Прибор выключен')
    };
};

function pc(ram, cpu, gpu, motherboard){
    this.ram =  ram,
    this.cpu = cpu,
    this.gpu = gpu,
    this.motherboard = motherboard,
    this.playGames = () => console.log('Вы играете в компьютерные игры'),
    this.code = () => console.log('Вы кодите это в 12 часов вечера'),
    this.flex = () => console.log(`Процессор - ${this.cpu}, Видеокарта - ${this.gpu}, Оперативная память ГБ - ${this.ram}, Материнская плата - ${this.motherboard}`)
};

function washingMachine(maxWeight, pressPower){
    this.weight = maxWeight,
    this.press = pressPower,
    this.washClothes = () => console.log('Вы стираете вещи');
};

pc.prototype = new switchPower()
washingMachine.prototype = new switchPower()

const testPc = new pc(16, 'AMD Ryzen 7 2700', 'Nvidia RTX 3070', 'Gigabyte S2h')
const newWM = new washingMachine(6, 1000)

console.log('Задание 4');
console.log('Компьютер');
testPc.powerOn();
testPc.playGames();
testPc.code();
testPc.flex();
testPc.powerOff();

console.log('Стиральная машина');
newWM.powerOn();
newWM.washClothes();
newWM.powerOff();


// Задание 5. Переписать все это с помощью классов. 

class gadgetAction {
    enable(){
        console.log('Включение');
    };
    disable(){
        console.log('Выключение');
    };
};

class computer extends gadgetAction {
    constructor(ram, cpu, gpu, motherboard){
        super()
        this.ram =  ram,
        this.cpu = cpu,
        this.gpu = gpu,
        this.motherboard = motherboard
    };

    play(){
        console.log('Вы играете в компьютерные игры')
    };

    coding(){
        console.log('Вы все еще кодите это в 12 часов вечера')
    };

    flexing(){
        console.log(`Процессор - ${this.cpu}, Видеокарта - ${this.gpu}, Оперативная память ГБ - ${this.ram}, Материнская плата - ${this.motherboard}`)
    };
};

class wMachine extends gadgetAction {
    constructor(maxWeight, pressPower){
        super()
        this.weight = maxWeight,
        this.press = pressPower
    };
    washIt(){
        console.log('Вы стираете вещи')
    };
};

pc1 = new computer(16, 'AMD Ryzen 7 2700', 'Nvidia RTX 3070', 'Gigabyte S2h')
wm1 = new wMachine(6, 1000)

console.log('Задание 5. Компьютер');
pc1.enable();
pc1.play();
pc1.coding();
pc1.flexing();
pc1.disable();

console.log('Стиральная машина');
wm1.enable();
wm1.washIt();
wm1.disable();

