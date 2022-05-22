import { ProductDto } from "./productDto";

export interface UserDto {
  id: number;
  name: string;
  productsList: ProductDto[];
}
