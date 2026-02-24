"use client"

import createProductAction from "@/actions/create-product-action"
import { ProductSchema } from "@/src/schema"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function AddProductForm({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId'),
            image: formData.get('imageUrl')
        }
        const result = ProductSchema.safeParse(data)
        if (!result.success) {
            result.error.issues.forEach((issue) => {
                toast.error(issue.message)
            })
            return
        }

        const response = await createProductAction(result.data)
        if(response?.errors) {
            response.errors.forEach((error: { message: string }) => {
                toast.error(error.message)
            })
            return
        }
        toast.success('Producto creado exitosamente')
        router.push('/admin/products')
    }

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
            <form action={handleSubmit} className="space-y-5">
                {children}
                <input type="submit" value={'Registrar Producto'} className="bg-indigo-600 hover:bg-indigo-800 text-white w-full font-bold p-3 mt-5 uppercase cursor-pointer transition-colors" />
            </form>
        </div>
    )
}
