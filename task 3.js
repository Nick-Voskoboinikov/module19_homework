
/*
Function creating empty object without a prototype. <}{> Функция, которая создает пустой объект, но без прототипа.
o_O
*/
function emptyObjCreator(str="") {
    eval ( str = Object.create(null,{}) );
    return str;
}

/* //Usage sample <}{> Пример использования:

console.log(emptyObjCreator());
*/