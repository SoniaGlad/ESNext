console.clear();

// get/setPrototypeOf

let Ultimate = () => console.log(13);

Object.setPrototypeOf(user, Ultimate); // установить у объекта user пользовательский прототип Ultimate

Object.getPrototypeOf(user); // получить данные о пользовательском прототипе у объекта user (см. консоль!)