// ================================
// OBJECT METHODS — ПАМЯТКА
// ================================

// Object.keys(obj)
// → возвращает массив ключей объекта

// Object.values(obj)
// → возвращает массив значений объекта

// Object.entries(obj)
// → возвращает массив пар [ключ, значение]


// Object.assign(target, source)
// → копирует свойства из source в target
// → изменяет target


// Object.hasOwn(obj, key)
// → проверяет, есть ли у объекта собственное свойство с таким ключом
// → возвращает true / false


// Object.fromEntries(array)
// → превращает массив пар [ключ, значение] обратно в объект


// Object.create(obj)
// → создаёт новый объект с указанным объектом в качестве прототипа


// Object.getPrototypeOf(obj)
// → возвращает прототип объекта


// Object.setPrototypeOf(obj, prototype)
// → устанавливает/изменяет прототип объекта


// Object.defineProperty(obj, key, descriptor)
// → создаёт или изменяет свойство объекта
// → позволяет настроить value, writable, enumerable, configurable


// Object.getOwnPropertyDescriptor(obj, key)
// → возвращает дескриптор одного собственного свойства


// Object.getOwnPropertyDescriptors(obj)
// → возвращает дескрипторы всех собственных свойств


// Object.getOwnPropertyNames(obj)
// → возвращает массив всех собственных свойств с ключами-строками
// → включая неперечисляемые свойства


// Object.getOwnPropertySymbols(obj)
// → возвращает массив всех собственных Symbol-ключей


// Object.is(value1, value2)
// → сравнивает два значения
// → возвращает true / false
// → отличается от === в некоторых особых случаях


// Object.freeze(obj)
// → полностью замораживает объект
// → нельзя изменять, добавлять или удалять свойства


// Object.seal(obj)
// → запрещает добавлять и удалять свойства
// → существующие свойства можно изменять


// Object.preventExtensions(obj)
// → запрещает добавлять новые свойства
// → существующие свойства можно изменять и удалять


// Object.isFrozen(obj)
// → проверяет, заморожен ли объект
// → true / false


// Object.isSealed(obj)
// → проверяет, запечатан ли объект
// → true / false


// Object.isExtensible(obj)
// → проверяет, можно ли добавлять новые свойства
// → true / false


// Symbol()
// → создаёт уникальное значение Symbol
// → Symbol можно использовать как ключ объекта