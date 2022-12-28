/*
Function accepts a string and an object as its arguments and then checks if passed object has a property from the string <}{>
Функция принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем.
*/
function objOwnsProp(obj,string){
    return ( string in obj ) ? true : false;
}

/* //Usage sample <}{> Пример использования:

a={str:"stroka"};
b="str";
objOwnsProp(a,b);
*/