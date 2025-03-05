import { Product } from "./product";

export type Specs = {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
};

export type ColorOption = {
  name: string;
  hexCode: string;
  imageUrl: string;
};

export type ColorOptions = ColorOption[];

export type StorageOption = {
  capacity: string;
  price: 0;
};

export type StorageOptions = StorageOption[];

export type SimilarProducts = Product[];

export type ProductDetails = {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: 0;
  rating: 0;
  specs: Specs;
  colorOptions: ColorOptions;
  storageOptions: StorageOptions;
  similarProducts: SimilarProducts;
};
