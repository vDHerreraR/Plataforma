import http from "../Http-common";

class Consultas {
  //user
  getAllUsers() {
    return http.get("/getUser");
  }

  CreatedUser(data){
    return http.post("/addUser", data)
  }

  //rol
  getAllRols() {
    return http.get("/getrol");
  }

  //Locations
  getAllLocations() {
    return http.get("/getlocalization");
  }

  //Contacts
  getAllContacts() {
    return http.get("/getcontact");
  }
}

export default new Consultas();



