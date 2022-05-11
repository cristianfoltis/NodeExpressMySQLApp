const db = require('../models')

const Product = db.products; // se creeaza tabela 

// 1.Create Product

const addProduct = async (req, res) => {
    const info = {
  //      id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info);
    res.status(201).send(product);

}

// 2.Get all products

const getAllProducts = async (req, res) => {
    const products = await Product.findAll({
     // attributes: ['title', 'price']
    });
    res.status(200).send(products);
}

// 3. Get product by id 

const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findOne({ where: { id: id }});
    res.status(200).send(product);
}

// 4. Update product 

const updateProduct = async (req, res) => {

    const id = req.params.id;

    const product = await Product.update(req.body, { where: { id: id }});

    res.status(200).send('Product is updated!');
}

// 5. Delete product 

const deleteProduct = async (req, res) => {
    
    const id = req.params.id;
    
    await Product.destroy({ where: { id: id }});
    
    res.status(200).send('Product is deleted!');
}

// 6. Get published product 

const getPublishedProducts = async (req, res) => {
     
    const products = await Product.findAll({ where: { published: true }});
    
    res.status(200).send(products);
}

// 6. Get unpublished product 

const getUnpublishedProducts = async (req, res) => {
     
    const products = await Product.findAll({ where: { published: false }});
    
    res.status(200).send(products);
}

module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getPublishedProducts,
    getUnpublishedProducts
}


