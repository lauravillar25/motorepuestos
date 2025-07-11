import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../components/ItemList'
import { getProducts } from '../data/products'

export default function ItemListContainer() {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts(categoryId).then(setProducts)
  }, [categoryId])

  return (
    <div>
      <h1>Productos {categoryId ? `- ${categoryId}` : ''}</h1>
      <ItemList products={products} />
    </div>
  )
}