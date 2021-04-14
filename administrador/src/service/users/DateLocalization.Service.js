import http from "../Http-common";

//postal code
class LocationsService {
  //POSTAL CODE
  getAllPostalCode() {
    return http.get("/getpostal_code");
  }

  //COUNTRYS
  getAllCountry() {
    return http.get("/getcountry");
  }

  //DEPARTMENTS
  getAllDepartment() {
    return http.get("/getdepartment");
  }

  //CITYS
  getAllCitys() {
    return http.get("/getcity");
  }
}

export default new LocationsService();


