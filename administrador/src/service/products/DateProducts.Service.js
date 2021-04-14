import http from "../Http-common";

//products
class ProductsService {
  getAllProducts() {
    return http.get("/getProduct");
  }

  getAllCategories() {
    return http.get("/getCategory");
  }
}

export default new ProductsService();
