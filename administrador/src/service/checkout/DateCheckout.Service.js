import http from "../Http-common";

//checkout
class OrdersService {
    //checkout
    getAllCheckOut() {
      return http.get("/getcheckout");
    }
    //state_checkout
    getAllStateCheckOut() {
      return http.get("/getstatecheckout");
    }
    //payment_method
    getAllMethods() {
      return http.get("/getpaymentmethod");
    }
}


export default new OrdersService();
