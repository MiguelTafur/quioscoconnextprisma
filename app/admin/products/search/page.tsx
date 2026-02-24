import prisma from "@/src/lib/prisma";
import Heading from "@/components/ui/Heading";
import ProductsTable from "@/components/products/ProductsTable";
import ProductSearchForm from "@/components/products/ProductSearchForm";

async function searchProducts(search: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: search,
                mode: "insensitive"
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function SearchPage({ searchParams }: { searchParams: { search: string } }) {

    const products = await searchProducts(searchParams.search)

    return (
        <>
            <Heading>Resultados de búsqueda para: {searchParams.search}</Heading>

            <div className="flex flex-col gap-5 lg:flex-row items-start justify-end mb-5">

                <ProductSearchForm />
            </div>

            {products.length > 0 ? (
                <ProductsTable products={products} />
            ) : (
                <p className="text-center text-gray-500 mt-10">No se encontraron productos que coincidan con tu búsqueda.</p>
            )}
        </>
    )
}
