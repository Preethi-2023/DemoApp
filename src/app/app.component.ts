import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message = "Hello Preethi";
  data: any;
  name: any;
  price: any;
  product:Product = new Product();



  constructor(){
  }
  Handledata(e:any){
    this.data=e.target.value;
  }
  UpdateProduct(){
    this.product.name = this.name;
    this.product.price = this.price;
    
  }

    
  }

  
