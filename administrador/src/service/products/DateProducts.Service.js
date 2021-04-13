import http from "../Http-common";

//products
class ProductsService {
  getAll() {
    return http.get("/getProduct");
  }
}

export default new ProductsService();

//categories
class CategoriesService {
    getAll() {
      return http.get("/getCategory");
    }
  }
  
  export default new CategoriesService();