module.exports = async function (db) {
    await db.sequelize.sync({force: true});
    return Promise.all([
        db.pizzas.create({
            name: 'Mozzarella',
            description: 'The best',
            calories: 2080.00
        }),
        db.pizzas.create({
            name: 'Marinara',
            description: 'This is a traditional Neapolitan pizza that is made with lots of garlic, anchovies and oregano.',
            calories: 2000.00
        }),
        db.pizzas.create({
            name: 'Capricciosa',
            description: 'This pizza is topped with olives',
            calories: 2320.85
        }),
        db.pizzas.create({
            name: 'Focaccia',
            description: 'This is the pizza that is most like the earliest pizzas. It is created without using cheese or tomatoes but is covered in caramelized onions, olive oil and savory toppings.',
            calories: 3200.00
        }),
        db.weapons.create({
            name: 'two katanas',
            dps: 156,
            ownerId: 1
        }),
        db.weapons.create({
            name: 'bo-staff',
            dps: 90,
            ownerId: 3
        }),
        db.weapons.create({
            name: 'sais',
            dps: 120,
            ownerId: 2
        }),
        db.weapons.create({
            name: 'nunchucks',
            dps: 140,
            ownerId: 4
        }),
        db.turtles.create({
            name: 'Leonardo',
            color: 'blue',
            weaponId: 4,
            firstFavoritePizzaId: 1,
            secondFavoritePizzaId: 2
        }),
        db.turtles.create({
            name: 'Raphael',
            color: 'red',
            weaponId: 1,
            firstFavoritePizzaId: 2,
            secondFavoritePizzaId: 4
        }),
        db.turtles.create({
            name: 'Donatello',
            color: 'purple',
            weaponId: 2,
            firstFavoritePizzaId: 3,
            secondFavoritePizzaId: 1
        }),
        db.turtles.create({
            name: 'Michelangelo',
            color: 'orange',
            weaponId: 3,
            firstFavoritePizzaId: 4,
            secondFavoritePizzaId: 3
        })
    ]);
};