class ProductManager{
    constructor(){
        this.products = [];
    }

addProduct(product) {
    let checkCode  = this.products.find((p) => p.code === product.code);
        if (checkCode) {
        //throw new error ('This code already exists');
        return 'This code already exists';
    }
            if(
                !product.title || 
                !product.descripcion || 
                !product.price || 
                !product.thumbnail || 
                !product.code || 
                !product.stock
            ) {
                //throw new error ('Fields missing');
                return 'Fields missing'
        }
        this.products.push(product)   
        return 'Product added'      
    } 


getProduct() {}

getProductById(id) {}
}

const product = {
        title: "papitas",
        descripcion: "papas",
        price : 200,
        thumbnail: 'https://www.eltiempo.com/uploads/2021/04/15/6078c68c2f49b.jpeg',
        code: 'abc123',
        stock : 200,
    }

const productManager = new ProductManager();
console.log (productManager.addProduct(product));

