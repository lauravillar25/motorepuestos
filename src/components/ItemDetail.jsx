export default function ItemDetail({ item }) {
  return (
    <div className="card shadow">
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <p className="fw-bold">Precio: ${item.price}</p>
      </div>
    </div>
  )
}
