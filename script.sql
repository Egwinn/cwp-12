create schema cwp_12;
use cwp_12;

create table turtles (
	id int auto_increment primary key,
    name nvarchar(255) not null,
    color nvarchar(255) not null,
    weaponId int not null,
    firstFavoritePizzaId int not null,
    secondFavoritePizzaId int not null 
);

create table weapons (
	id int auto_increment primary key,
    name nvarchar(255) not null,
    dps int not null
);

create table pizzas (
	id int auto_increment primary key,
    name nvarchar(255) not null,
    description nvarchar(255) not null,
    calories double not null
)

insert into pizzas (name, description, calories) 
        values ('Mozzarella', 'The best', 256);
insert into pizzas (name, description, calories) 
        values ('Marinara', 'This is a traditional Neapolitan pizza that is made with lots of garlic, anchovies and oregano.', 247);
insert into pizzas (name, description, calories) 
        values ('Capricciosa', 'This pizza is topped with olives, artichoke hearts, half of a boiled egg, prosciutto and mushrooms.', 3001.85);
insert into pizzas (name, description, calories) 
        values ('Focaccia', 'This is the pizza that is most like the earliest pizzas. It is created without using cheese or tomatoes but is covered in caramelized onions, olive oil and savory toppings.', 256);

insert into weapons (name, dps)
        values ('sais', 120);
insert into weapons (name, dps)
        values ('nunchucks', 140);
insert into weapons (name, dps)
        values ('bo-staff', 90);
insert into weapons (name, dps)
        values ('two katanas', 156);

insert into turtles (name, color, weaponId, firstFavoritePizzaId, secondFavoritePizzaId)
        values ('Leonardo', 'blue', 4, 1, 2);
insert into turtles (name, color, weaponId, firstFavoritePizzaId, secondFavoritePizzaId)
        values ('Raphael', 'red', 1, 2, 4);
insert into turtles (name, color, weaponId, firstFavoritePizzaId, secondFavoritePizzaId)
        values ('Donatello', 'purple', 2, 3, 1);
insert into turtles (name, color, weaponId, firstFavoritePizzaId, secondFavoritePizzaId)
        values ('Michelangelo', 'orange', 3, 4, 3);