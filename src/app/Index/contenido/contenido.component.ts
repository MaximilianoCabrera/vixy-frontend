import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  title = 'App Works!';

  private apiUrl = 'http://localhost:8080/users';
  usuarios: any = {};

  constructor(private http: Http) {
    console.log('Hello fellow user');
    // this.getContacts();
    // this.getData();
  }
  /*

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json());
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.usuarios = data;
    });
  }
  */

}
