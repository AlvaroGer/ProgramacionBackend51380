class ProductManager {
    id = 1;

    constructor() {
    this.products = [];
    }

    addProduct(product) {
    let checkCode = this.products.find((p) => p.code === product.code);
    if (checkCode) {
        // throw new Error('This code already exists');
        return 'This code already exists';
    }
    if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
    ) {
        // throw new Error('Fields missing');
        return 'Fields missing';
    }
    let newProduct = { ...product, id: this.id };
    this.products.push(newProduct);
    this.id++;
    return 'Product added';
    }

    getProducts() {
    return this.products;
    }

    getProductById(id) {
    let found = this.products.find((p) => p.id === id);
    if (!found) {
        return 'Not found';
    }
    return found;
    }
}

const product = {
    title: 'Pc',
    description: 'Pc Gamer',
    price: 1400,
    thumbnail:
    'https://http2.mlstatic.com/D_NQ_NP_2X_733567-MLU52952378098_122022-F.webp',
    code: '123',
    stock: 20,
};
const product2 = {
    title: 'Pc',
    description: 'Notebook',
    price: 960,
    thumbnail:
    'https://netpc.uy/wp-content/uploads/2021/09/1-51.png',
    code: '124',
    stock: 15,
};

const productManager = new ProductManager();

console.log(productManager.addProduct(product));
console.log(productManager.addProduct(product2));
console.log(productManager.getProducts());
console.log(productManager.getProductById(43));