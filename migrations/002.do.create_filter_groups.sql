CREATE TABLE filter_groups (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    english_name TEXT NOT NULL
);

insert into filter_groups 
(english_name)
values
    ('Activewear type'),
    ('Bra style'),
    ('Coat or jacket style'),
    ('Denim details'),
    ('Denim wash'),
    ('Dress or skirt Length'),
    ('Dress style'),
    ('Facemask styles'),
    ('Hair Accessories and Hat Types'),
    ('Inseam'),
    ('Lingerie, Loungewear, and Shapewear Type'),
    ('Neckline'),
    ('Office friendly'),
    ('Rise'),
    ('Pants style'),
    ('Pockets'),
    ('Shoe style'),
    ('Skirt style'),
    ('Sleeve length'),
    ('Socks or tights style'),
    ('Swimwear type'),
    ('Brand'),
    ('Certification'),
    ('Color'),
    ('Fabric'),
    ('Fiber'),
    ('Wash instructions'),
    ('Dry instructions'),
    ('Price'),
    ('Size class'),
    ('Size');