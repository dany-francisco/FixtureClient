import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  api = "https://5eb2fe44b933.ngrok.io/";

  constructor(private http: HttpClient) {

  }

  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',    
  });

  getFormUrlEncoded(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }

  index() {
    return this.http.get(this.api + "api/auth/users", {});
  }
  show(id:number) {
    return this.http.get(this.api + "api/auth/users/" + id, {
      'headers': {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
  post(nombrez:string) {
    return this.http.post(this.api + "api/auth/users", 
      this.getFormUrlEncoded({
        'nombre': nombrez
      }), {'headers': this.headers});
  }
  put(id:number, data:any) {
    return this.http.put(this.api + "api/auth/users/" + id,
      this.getFormUrlEncoded(data),
      {
        'headers': this.headers
      }
    );
  }
  delete(id:number) {
    return this.http.delete(this.api + "api/auth/users/" + id);
  }
  addRol(userId:number, rolId:number) {
    return this.http.post(this.api + "api/auth/usuariorols", 
      this.getFormUrlEncoded({
        'user_id': userId,
        'rol_id': rolId
      }), {'headers': this.headers});    
  }
  deleteRol(userRolId:number) {
    return this.http.delete(this.api + "api/auth/usuariorols/" + userRolId, 
    {'headers': this.headers});    
  }
}
