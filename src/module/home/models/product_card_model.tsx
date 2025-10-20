export class ProductCardModel {
  id: number;
  image: string;
  productName: string;
  description: string;
  tags: string[];

  constructor(id: number, image: string, productName: string, description: string, tags: string[]) {
    this.id = id;
    this.image = image;
    this.productName = productName;
    this.description = description;
    this.tags = tags;
  }
}