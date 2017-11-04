import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: any[];
  filteredProducts: any[];
  constructor(private productService: ProductService) { 
    this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
    
  }

  ngOnInit() {
  }

  filter(query: string){
    this.filteredProducts = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLocaleLowerCase())): this.products
  }

}
