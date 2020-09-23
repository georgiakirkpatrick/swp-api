CREATE TABLE products (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    english_name TEXT NOT NULL,
    brand_id INTEGER REFERENCES brands(id) ON DELETE CASCADE NOT NULL,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE NOT NULL,
    product_url TEXT NOT NULL,
    feature_image_url TEXT NOT NULL,
    multiple_color_options BOOLEAN NOT NULL,
    home_currency TEXT NOT NULL,
    cost_in_home_currency MONEY NOT NULL,
    wash_id INTEGER REFERENCES wash_instructions(id) ON DELETE CASCADE,
    dry_id INTEGER REFERENCES dry_instructions(id) ON DELETE CASCADE,
    cmt_country TEXT,
    cmt_factory_notes TEXT,
    approved_by_admin BOOLEAN DEFAULT false NOT NULL,
    date_published TIMESTAMPTZ DEFAULT now() NOT NULL
);