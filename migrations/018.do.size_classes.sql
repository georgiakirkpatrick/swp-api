CREATE TABLE size_classes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    english_name TEXT NOT NULL
);

insert into size_classes
(english_name)
values
    ('standard'),
    ('petite'),
    ('tall'),
    ('maternity'),
    ('tall plus'),
    ('maternity plus');