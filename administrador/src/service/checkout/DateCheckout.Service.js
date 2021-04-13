import http from "../Http-common";

//checkout
class CheckoutsService {
    getAll() {
      return http.get("/getcheckout");
    }
}

export default new CheckoutsService();

//state checkout
class StateCheckoutsService {
    getAll() {
      return http.get("/getstatecheckout");
    }
}

export default new StateCheckoutsService();

//Payment methods
class PaymentsService {
    getAll() {
      return http.get("/getpaymentmethod");
    }
}

export default new PaymentsService();
