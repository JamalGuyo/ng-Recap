import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  products: ProductModel[];
  filteredProducts: ProductModel[];

  listFilterVar: string;
  get listFilter(): string {
    return this.listFilterVar;
  }
  set listFilter(value: string) {
    this.listFilterVar = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error(err) {
        console.log(err);
      }
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): ProductModel[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: ProductModel) =>
      product.productName.toLowerCase().includes(filterBy)
    );
  }
}
