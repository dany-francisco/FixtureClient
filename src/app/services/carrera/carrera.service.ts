import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  api = "https://5eb2fe44b933.ngrok.io/";

  constructor(private http: HttpClient) {

  }
  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
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
    return this.http.get(this.api + "api/auth/carreras", {});
  }
  show(id:number) {
    return this.http.get(this.api + "api/auth/carreras/"+ id, {});
  }
   post(nombrey:string) {
    return this.http.post(this.api + "api/auth/carreras", 
      this.getFormUrlEncoded({
        'nombre': nombrey
      }), {'headers': this.headers});
  }
    put(id:number, data:any) {
    return this.http.put(this.api + "api/auth/carreras/" + id,
      this.getFormUrlEncoded(data),
      {
        'headers': this.headers
      }
    );
  }
   delete(id:number) {
    return this.http.delete(this.api + "api/auth/carreras/" + id);
  }
} 
