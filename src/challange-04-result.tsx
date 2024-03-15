// Código em inglês 

//@ts-nocheck

import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ComponentListProducts() {
  const [filteredProduct, setFilteredProduct] = useState<Product[]>([])

  function searchProducts(search: string) {
    const filtrado = productList.filter(product => product.title.includes(search))

    setFilteredProduct(filtrado)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProducts(e.target.value)} />

      {filteredProduct.map(produto => (
        <div>
          <p>{produto.title}</p>
          <p>{produto.price}</p>
        </div>
      ))}
    </div>
  )
}