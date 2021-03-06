const ProductsService = {
// Products
    getAllProducts(knex) {
        return knex('products')
            .select(
                'products.id',
                'products.english_name',
                'products.brand_id',
                'products.category_id',
                'products.product_url',
                'products.feature_image_url',
                'products.multiple_color_options',
                'products.cost_in_home_currency',
                'products.wash_id',
                'products.dry_id',
                'products.cmt_country',
                'products.cmt_factory_notes',
                'products.approved_by_admin',
                'products.date_published'
            )
    },

    getProductById(knex, id) {
        return knex('products')
            .join('brands', {'products.brand_id': 'brands.id'} )
            .select(
                'products.id',
                'products.english_name',
                'products.brand_id',
                'brands.english_name as brand_name',
                'brands.home_currency',
                'products.category_id',
                'products.product_url',
                'products.feature_image_url',
                'products.multiple_color_options',
                'products.cost_in_home_currency',
                'products.wash_id',
                'products.dry_id',
                'products.cmt_country',
                'products.cmt_factory_notes',
                'products.approved_by_admin',
                'products.date_published'
            )
            .where('products.id', id)
            .first()
    },

    insertProduct(knex, newProduct) {
        return knex
            .insert(newProduct)
            .into('products')
            .returning('*')
            .then(response => {
                return response[0]
            })
    },

    deleteProduct(knex, id) {
        return knex('products')
            .where({ id })
            .delete()
    },

    updateProduct(knex, id, newProductFields) {
        return knex('products')
            .where({ id })
            .update(newProductFields)
    },  

//Certifications
    getCertificationsForProduct(knex, productId) {
        return knex('product_cmts_to_certifications')
            .join('certifications', {'product_cmts_to_certifications.certification_id': 'certifications.id'})
            .select('*')
            .where('product_cmts_to_certifications.product_id', productId)
    },

    insertProductCertification(knex, newPair) {
        return knex
            .insert(newPair)
            .into('product_cmts_to_certifications')
            .returning('*')
            .then(response => {
                return response[0]
            })
    },

// Fabrics
    getFabricsForProduct(knex, productId) {
        return knex('fabrics')
            .join('fabrics_to_products', {'fabrics.id': 'fabrics_to_products.product_id'})
            .join('fabric_types', {'fabrics.fabric_type_id': 'fabric_types.id'})
            .select(
                'fabrics.id',
                'fabric_types.english_name as fabric_type',
                'fabrics.fabric_mill_country',
                'fabrics.fabric_mill_notes',
                'fabrics.dye_print_finish_country',
                'fabrics.dye_print_finish_notes'
            )
            .where('product_id', productId)
    },

    insertProductFabric(knex, newPair) {
        return knex
            .insert(newPair)
            .into('fabrics_to_products')
            .returning('*')
            .then(response => {
                return response[0]
            })
    },

// Factories
    getFactoriesForProduct(knex, productId) {
        return knex('factories')
            .join('product_cmts_to_factories', {'factories.id': 'product_cmts_to_factories.factory_id'})
            .select(
                'factories.id',
                'factories.english_name',
                'factories.country',
                'factories.website',
                'factories.notes',
                'product_cmts_to_factories.stage',
                'factories.approved_by_admin',
                'factories.date_published'
            )
            .where('product_id', productId)
    },

    insertProductFactory(knex, newGroup) {
        return knex
            .insert(newGroup)
            .into('product_cmts_to_factories')
            .returning('*')
            .then(response => response[0])
    },

// Fibers
    getFibersForProduct(knex, productId) {
        return knex('fibers_and_materials')
            .join('fibers_to_products', {'fibers_and_materials.id': 'fibers_to_products.fiber_or_material_id'})
            .join('fiber_and_material_types', {'fibers_and_materials.fiber_or_material_type_id': 'fiber_and_material_types.id'})
            .join('factories', {'fibers_and_materials.producer_id': 'factories.id'})
            .select(
                'fibers_and_materials.id',
                'fibers_and_materials.fiber_or_material_type_id as fiber_type_id',
                'fiber_and_material_types.english_name as fiber_type',
                'fiber_and_material_types.fiber_type_class as class',
                'fibers_and_materials.brand_id',
                'fibers_and_materials.producer_country',
                'fibers_and_materials.producer_id',
                'factories.english_name as producer',
                'factories.website as producer_website',
                'fibers_and_materials.producer_notes',
                'factories.notes as factory_notes',
                'fibers_and_materials.approved_by_admin',
                'fibers_and_materials.date_published'
            )
            .where('product_id', productId)
    },

    producer: 'The Orange Concept',
            producer_website: 'www.orange.com',
            factory_notes: 'family-owned',

    insertProductFiber(knex, newPair) {
        return knex
            .insert(newPair)
            .into('fibers_to_products')
            .returning('*')
            .then(response => response[0])
    },

// Images
    getImagesForProduct(knex, productId) {
        return knex('product_images')
            .select('*').where('product_id', productId)
    },

    insertImages(knex, newImage) {
        return knex
            .insert(newImage)
            .into('product_images')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },

// Notions
    getNotionsForProduct(knex, productId) {
        return knex('notions')
            .join('notion_types', {'notions.notion_type_id': 'notion_types.id'})
            .join('notions_to_products', {'notions.id': 'notions_to_products.notion_id'})
            .join('factories', {'notions.notion_factory_id': 'factories.id'})
            .join('notions_to_fibers_and_materials', {'notions.id': 'notions_to_fibers_and_materials.notion_id'})
            .join('fibers_and_materials', {'notions_to_fibers_and_materials.fiber_or_material_id': 'fibers_and_materials.id'})
            .join('fiber_and_material_types', {'fibers_and_materials.fiber_or_material_type_id': 'fiber_and_material_types.id'})
            .select(
                'notions.id',
                'notions.notion_type_id',
                'notions.brand_id',
                'notion_types.english_name as notion_type',
                'notions.notion_factory_country',
                'notions.notion_factory_id',
                'factories.english_name as factory',
                'notions.notion_factory_notes',
                'fibers_and_materials.id as material_id',
                'fibers_and_materials.fiber_or_material_type_id',
                'fiber_and_material_types.english_name as material',
                'fibers_and_materials.producer_country',
                'fibers_and_materials.producer_id as material_producer_id',
                'notions.approved_by_admin',
                'notions.date_published'
            )
            .where('notions_to_products.product_id', productId)
    },

    insertProductNotion(knex, newPair) {
        return knex
            .insert(newPair)
            .into('notions_to_products')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },

// Sizes
    getSizesForProduct(knex, productId) {
        return knex('sizes')
            .join('sizes_to_products', {'sizes.id': 'sizes_to_products.size_id'})
            .join('size_classes', {'sizes.size_class_id': 'size_classes.id'})
            .join('size_types', {'sizes.size_type_id': 'size_types.id'})
            .select(
                'sizes.id',
                'sizes.size_type_id',
                'size_types.english_name as size_type',
                'sizes.size_class_id',
                'size_classes.english_name as size_class',
                'sizes.us_size'
            )
            .where('product_id', productId)
    },

    insertProductSizes(knex, newPair) {
        return knex
            .insert(newPair)
            .into('sizes_to_products')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
}

module.exports = ProductsService