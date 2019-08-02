import { Component, OnInit } from '@angular/core';
import {productDetails} from '../shared/services/products.services'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public imgToggle:any;
  public text:any= " : ";
  public returnText:any;
  public buttonName: any='Show Images';
  public btnStatus:boolean=false;
  public productData:any;
  constructor(private productDetailsServices: productDetails) { }

  ngOnInit() {
    this.productDetailsServices.getProductDetails().subscribe( data => { 
      this.productData=data;
      //console.log(this.productData);
    })
  }
  btnAction(){
    this.btnStatus=!this.btnStatus;
    if(this.btnStatus){
      this.buttonName="Hide Images";
    }
    else
    {
      this.buttonName="Show Images";
    }
  }
  imgAction(){
    this.returnText=this.text + this.productData.rating;
    return this.returnText;
  }
}
