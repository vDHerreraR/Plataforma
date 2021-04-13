import http from "./Http-common";

//postal code
class PostalCodeService {
  getAll() {
    return http.get("/getpostal_code");
  }
}

export default new PostalCodeService();

//country
class CountrysService {
  getAll() {
    return http.get("/getcountry");
  }
}

export default new CountrysService();


//department
class DepartmentsService {
    getAll() {
      return http.get("/getdepartment");
    }
}

export default new DepartmentsService();


//City
class CitysService {
    getAll() {
      return http.get("/getcity");
    }
}

export default new CitysService();


