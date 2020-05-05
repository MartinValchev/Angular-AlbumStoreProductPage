import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private _productService: ProductService) { }
  errorMessage: string;
  albumInfo:string;

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(
      response => this.albumInfo = response
    )
  }

}

// productService.getProducts().subscribe({
//   next: products => {
//       this.products = products;
//       this.filteredProducts = this.products;
//   },
//   error: err => this.errorMessage = err
  
// });
