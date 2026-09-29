

// class ProductController {

//     async home(req, res) {

//         const products = [

//             {
//                 productName: "Classic Cotton T-Shirt",
//                 size: "M",
//                 color: "Black",
//                 category: "Clothing",
//                 model: "CT-101",
//                 brand: "UrbanStyle",
//                 imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
//                 description: "Comfortable 100% cotton round-neck T-shirt for everyday wear."
//             },

//             {
//                 productName: "Running Sports Shoes",
//                 size: "9",
//                 color: "White",
//                 category: "Footwear",
//                 model: "RS-202",
//                 brand: "SportMax",
//                 imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//                 description: "Lightweight running shoes designed for comfort and daily workouts."
//             },

//             {
//                 productName: "Leather Office Bag",
//                 size: "Medium",
//                 color: "Brown",
//                 category: "Bags",
//                 model: "LB-303",
//                 brand: "LeatherCraft",
//                 imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
//                 description: "Premium leather office bag with multiple compartments for work essentials."
//             },

//             {
//                 productName: "Smart Watch Pro",
//                 size: "44mm",
//                 color: "Black",
//                 category: "Electronics",
//                 model: "SW-404",
//                 brand: "TechTime",
//                 imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//                 description: "Modern smartwatch with fitness tracking, notifications and heart-rate monitoring."
//             },

//             {
//                 productName: "Wireless Headphones",
//                 size: "Standard",
//                 color: "Blue",
//                 category: "Electronics",
//                 model: "WH-505",
//                 brand: "SoundPro",
//                 imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
//                 description: "Wireless headphones offering clear sound, deep bass and comfortable ear cushions."
//             },

//             {
//                 productName: "Classic Denim Jeans",
//                 size: "32",
//                 color: "Blue",
//                 category: "Clothing",
//                 model: "DJ-606",
//                 brand: "DenimWorld",
//                 imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d",
//                 description: "Classic blue denim jeans with a comfortable fit for casual occasions."
//             },

//             {
//                 productName: "Ceramic Coffee Mug",
//                 size: "350ml",
//                 color: "White",
//                 category: "Home & Kitchen",
//                 model: "CM-707",
//                 brand: "HomeCraft",
//                 imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
//                 description: "Elegant ceramic coffee mug suitable for tea, coffee and other hot beverages."
//             },

//             {
//                 productName: "Laptop Backpack",
//                 size: "15.6 inch",
//                 color: "Grey",
//                 category: "Bags",
//                 model: "LBP-808",
//                 brand: "TravelGear",
//                 imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
//                 description: "Durable laptop backpack with padded compartments and multiple storage pockets."
//             },

//             {
//                 productName: "Mechanical Keyboard",
//                 size: "Full Size",
//                 color: "Black",
//                 category: "Computer Accessories",
//                 model: "MK-909",
//                 brand: "KeyMaster",
//                 imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
//                 description: "Mechanical keyboard with responsive keys designed for gaming and programming."
//             },

//             {
//                 productName: "Polarized Sunglasses",
//                 size: "Large",
//                 color: "Black",
//                 category: "Accessories",
//                 model: "PS-1010",
//                 brand: "VisionPro",
//                 imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
//                 description: "Stylish polarized sunglasses that provide UV protection and reduce glare."
//             }
//         ];


//         return res.render('Product', {
//             title: 'Product Page',
//             products: products
//         });
//     }
// }

// module.exports = new ProductController();
const Product = require("../models/product.model");

class ProductController {
    async getProduct(req, res) {
        try {
            const products = await Product.find();
            console.log("products found:", products.length);
            return res.render("crud/list", {
                title: "Product listing Page",
                products: products,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send("Something went wrong");
        }
    }

    async createProduct(req, res) {
        return res.render("crud/add", {
            title: "Product create Page",
        });
    }

    async storeProduct(req, res) {
        console.log("form data:", req.body);
        try {
            const { name, price, description, brand } = req.body;
            const product = new Product({
                name,
                price,
                description,
                brand,
            });
            const data = await product.save();
            console.log("saved:", data);
            if (data) {
                return res.redirect("/product");
            } else {
                return res.redirect("/product/create");
            }
        } catch (error) {
            console.log("save error:", error);
            return res.redirect("/product/create");
        }
    }
}

module.exports = new ProductController();