CREATE TABLE color_descriptions (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    english_name TEXT NOT NULL
);

insert into color_descriptions
(english_name)
values
    ('Black'),
    ('Grey'),
    ('White'),
    ('Off-white'),
    ('Beige'),
    ('Brown'),
    ('Purple'),
    ('Blue'),
    ('Green'),
    ('Yellow'),
    ('Orange'),
    ('Pink'),
    ('Red'),
    ('Pastel colors'),
    ('Bright colors'),
    ('Dark colors');