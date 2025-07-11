import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductById } from '../data/products'
import ItemDetail from '../components/ItemDetail'

export default function ItemDetailContainer() {
  const { itemId } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    getProductById(itemId).then(setItem)
  }, [itemId])

  return item ? <ItemDetail item={item} /> : <p>Cargando...</p>
}