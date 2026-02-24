"use client"

import LastestOrderItem from "@/components/order/LastestOrderItem"
import Logo from "@/components/ui/Logo"
import { OrderWithProducts } from "@/src/types"
import useSWR from "swr"

export default function OrderPage() {

    const url = '/orders/api'
    const fecther = () => fetch(url).then(res => res.json()).then(data => data)
    const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fecther, {
        refreshInterval: 60000
    })

    if (isLoading) return <p>Cargando...</p>
    if (data) return (
        <>
            <h1 className="text-center mt-20 text-6xl font-black">Ordenes Listas</h1>

            <Logo />

            {data.length ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto mt-10">
                    {data.map(order => (
                        <LastestOrderItem key={order.id} order={order} />
                    ))}
                </div>
            ) : (
                <p className="text-center mt-10 text-2xl">No hay ordenes listas</p>
            )}
        </>
    )
}
