export interface SearchOptions {
  searchText: String;
  page: Number;
  sort: String; // description || description || price || price
  direction: String; // ASC || DESC
  available: Boolean;
  minPrice: Number;
  maxPrice: Number
};