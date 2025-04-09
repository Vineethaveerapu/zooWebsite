class Page {
  constructor(name, slug) {
    this.name = name;
    this.slug = slug;
  }
}

export const pages = [
  new Page("Home", "/"),
  new Page("Birds", "/birds"),
  new Page("Mammals", "/mammals"),
  new Page("Reptiles", "/reptiles")
];
