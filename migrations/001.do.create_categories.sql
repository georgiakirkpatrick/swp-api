CREATE TYPE category_class_option AS ENUM (
    'clothing',
    'accessories',
    'shoes'                            
);

CREATE TABLE categories (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  english_name TEXT NOT NULL,
  category_class category_class_option NOT NULL DEFAULT 'clothing'
);

insert into categories
(english_name, category_class)
values
    ('Activewear', 'clothing'),
    ('Blazers', 'clothing'),
    ('Coats and Jackets', 'clothing'),
    ('Dresses', 'clothing'),
    ('Facemasks', 'accessories'),
    ('Hair Accessories and Hats', 'accessories'),
    ('Jeans', 'clothing'),
    ('Jumpsuits', 'clothing'),
    ('Lingerie, Shapewear, and Loungewear', 'clothing'),
    ('Pants', 'clothing'),
    ('Shoes', 'shoes'),
    ('Skirts', 'clothing'),
    ('Socks and Tights', 'clothing'),
    ('Sweaters', 'clothing'),
    ('Swimwear', 'clothing'),
    ('Tops', 'clothing');