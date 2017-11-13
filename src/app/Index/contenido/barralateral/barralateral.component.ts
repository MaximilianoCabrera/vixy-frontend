import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-barralateral',
  templateUrl: './barralateral.component.html',
  styleUrls: ['./barralateral.component.css']
})
export class BarralateralComponent {
  title = 'Barra Lateral!';

  private apiUrl = 'http://localhost:8080/entradas';
  entradas: any = {};

  constructor(private http: Http) {
    console.log('Hello from Barralateral');
    this.getEntradas();
    this.getData();
   }

   getData() {
     return this.http.get(this.apiUrl)
       .map((res: Response) => res.json());
   }

  getEntradas() {
    this.getData().subscribe(data => {
      console.log(data);
      this.entradas = data;
    });
  }

}
