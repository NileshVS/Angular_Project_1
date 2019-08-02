import {HttpClient} from '@angular/common/http';
import {Injectable, Inject} from '@angular/core'; 

@Injectable(
    {
        providedIn:"root"
    }
)

export class productDetails {
    JSONfile:string="../assets/productsapi.json";
    constructor(private http: HttpClient){}
    getProductDetails(){
        return this.http.get(this.JSONfile);
    }
}