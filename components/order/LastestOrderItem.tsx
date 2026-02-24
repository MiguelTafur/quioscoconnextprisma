import { OrderWithProducts } from "@/src/types"

type LatestOrderItemProps = {
  order: OrderWithProducts
}

export default function LastestOrderItem({ order }: LatestOrderItemProps) {
  return (
    <div className="border border-gray-200 p-5 rounded-lg shadow-sm ">
      <h2 className="text-xl font-bold mb-2">Orden #{order.id}</h2>
      <p className="text-3xl font-bold text-slate-600 mb-2">Cliente: {order.name}</p>

      <ul className="mb-2">
        {order.orderProducts.map(product => (
          <li key={product.id} className="text-gray-700">
            {product.product.name} x {product.quantity}
          </li>
        ))}
      </ul>

      <p className="text-gray-700 mb-2">Total: ${order.total}</p>
    </div>
  )
}
