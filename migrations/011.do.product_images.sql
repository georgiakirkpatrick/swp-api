CREATE TABLE product_images (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE NOT NULL,
    product_image_url TEXT NOT NULL,
    swatch_image_url TEXT,
    color_english_name TEXT NOT NULL,
    color_description_id INTEGER REFERENCES color_descriptions(id) ON DELETE CASCADE NOT NULL,
    primary_image_for_color BOOLEAN NOT NULL
);