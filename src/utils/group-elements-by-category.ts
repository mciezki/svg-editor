export interface CategoryObject {
  id: string;
  sizes: string[];
  names: string[];
  prices: string[];
  descriptions: string[];
}

export const groupElementsByCategory = (
  categories: NodeListOf<Element>,
  sizes: NodeListOf<Element>,
  names: NodeListOf<Element>,
  prices: NodeListOf<Element>,
  descriptions: NodeListOf<Element>
): Record<string, CategoryObject> => {
  const result: Record<string, CategoryObject> = {};

  categories.forEach((category) => {
    const categoryId = category.id;

    const sizeElements = Array.from(sizes).filter(
      (size) => size.id && size.id.includes(`_${categoryId}`)
    );
    const nameElements = Array.from(names).filter(
      (name) => name.id && name.id.includes(`_${categoryId}`)
    );
    const priceElements = Array.from(prices).filter(
      (price) => price.id && price.id.includes(`_${categoryId}`)
    );
    const descriptionElements = Array.from(descriptions).filter(
      (description) =>
        description.id && description.id.includes(`_${categoryId}`)
    );

    result[categoryId] = {
      id: categoryId,
      sizes: sizeElements.map((size) => size.id).sort(),
      names: nameElements.map((name) => name.id).sort(),
      descriptions: descriptionElements
        .map((description) => description.id)
        .sort(),
      prices: priceElements.map((price) => price.id).reverse(),
    };
  });

  return result;
};
