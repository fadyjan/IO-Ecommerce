// useProductFilter.js
import { useState, useEffect } from 'react';

const useProductFilter = (initialProducts) => {
  const [displayProducts, setDisplayProducts] = useState(initialProducts);

  useEffect(() => {
    setDisplayProducts(initialProducts);
  }, [initialProducts]);

  const filterProducts = (searchTerm) => {
    if (searchTerm === "") {
      setDisplayProducts(initialProducts);
      return;
    }

    const filtered = initialProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm)
    );

    setDisplayProducts(filtered);
  };

  return [displayProducts, filterProducts];
};

export default useProductFilter;
