import { Link } from 'react-router-dom'

export default function ItemList({ products }) {
  return (
    <div className="row">
      {products.map((item) => (
        <div className="col-md-4 mb-3" key={item.id}>
          <div className="card h-100 shadow-sm">
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">${item.price}</p>
              <Link to={`/item/${item.id}`} className="btn btn-primary">Ver detalle</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

