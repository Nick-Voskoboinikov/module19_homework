
/*
Function accepts an object as an rgument and outputs all keys and values of its own properties <}{> Функция принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств
*/
function iterateObjProps(obj){
    for (let iteratedProperty in obj){
        if(obj.hasOwnProperty(iteratedProperty)){
            console.log(iteratedProperty, obj[iteratedProperty]);
        }
    }
}

/* //Usage sample <}{> Пример использования:

a={str:"stroka"};
iterateObjProps(a);
*/