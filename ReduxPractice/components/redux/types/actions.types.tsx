import Product from "./types";

export default interface Action {
  type: string;
  data?: Product;
}