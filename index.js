const Sequelize = require('sequelize');
const config = require('./config.json');
const db = require('./models')(Sequelize, config);
WorkWork();

async function WorkWork() {
    await require('./insertData')(db);
    // 1. Выведем всех черепашек-ниндзя
    let result = await db.turtles.findAll();
    console.log("------- 1 -------");
    result.forEach((value) => {
        console.log(value.name);
    });
    // 2. Выведем всех черепашек-ниндзя у кого любимая пицца "Mozzarella"
    result = await db.turtles.findAll({
        where: {
            '$firstFavoritePizza.name$': "Mozzarella"
        },
        include: [{
            model: db.pizzas,
            as: 'firstFavoritePizza'
        }]
    });
    console.log("------- 2 -------");
    result.forEach((value) => {
        console.log(value.name);
    });
    // 3. Выведем все пиццы отмеченные как любимые без повторов
    result = await db.turtles.findAll({
        group: 'firstFavoritePizzaId',
        include: [{
            model: db.pizzas,
            as: 'firstFavoritePizza'
        }]
    });
    console.log("------- 3 -------");
    result.forEach((turtle) => {
        console.log(turtle.firstFavoritePizza.name);
    });
    // 4. Создадим пятую черепашку с вашим именем и любимым цветом. Не забываем про оружие
    result = await db.turtles.create({
        name: 'Marina',
        color: 'Yellow',
        weaponId: 1,
        firstFavoritePizzaId: 1,
        secondFavoritePizzaId: 2
    });
    console.log("------- 4 -------");
    console.log("Tirtle created");
    // 5. Обновим все пиццы с количеством калорий больше 3000 добавив к описанию "SUPER FAT!"
    result = await db.pizzas.update({
            description: "SUPER FAT!"
        },
        {
            where: {
                calories: {[db.Sequelize.Op.gt]: '3000'}
            }
        });
    console.log("------- 5 -------");
    console.log("Pizzas updated");
    // 6. Запросим число оружий с dps больше 100
    result = await db.turtles.count({
        where: {
            '$weapon.dps$': {[db.Sequelize.Op.gt]: '100'}
        },
        include: [{
            model: db.weapons,
            as: 'weapon'
        }]
    });
    console.log("------- 6 -------");
    console.log(result);
    // 7. Найдем пиццу с id равным 1
    result = await db.pizzas.findById(1);
    console.log("------- 7 -------");
    console.log(result.name);
    // 8. Добавим пятой черепашке любимую пиццу через объект черепахи
    result = await db.turtles.update({
            firstFavoritePizzaId: 4
        },
        {
            where: {
                name: 'Marina'
            }
        });
    console.log("------- 8 -------");
    console.log('Info updated');
}
