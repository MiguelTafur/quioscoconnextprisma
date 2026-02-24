import { redirect } from "next/navigation";
import ProductsPagination from "@/components/products/ProductsPagination";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import prisma from "@/src/lib/prisma";
import Link from "next/link";
import ProductSearchForm from "@/components/products/ProductSearchForm";

async function productsCount() {
  return await prisma.product.count()
}

async function getProducts(page: number, pageSize: number) {
  const products = await prisma.product.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
    include: {
      category: true
    }
  })
  return products
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function ProductPage(searchParams: {searchParams: {page: string}}) {

  const page = parseInt(searchParams.searchParams.page) || 1
  const pageSize = 10

  if(page < 0) redirect("/admin/products")

  const productsData = await getProducts(page, pageSize)
  const totalProductsData = await productsCount()
  const [products, totalProducts] = await Promise.all([productsData, totalProductsData])
  const totalPages = Math.ceil(totalProducts / pageSize)

  if(page > totalPages) redirect("/admin/products")

  return (
    <>
      <Heading>Administrar Productos</Heading>

      <div className="flex flex-col gap-5 lg:flex-row items-start justify-between mb-5">
        <Link href="/admin/products/new" className="bg-amber-400 hover:bg-amber-500 w-full lg:w-auto text-xl px-10 py-3 font-bold cursor-pointer">
          Crear Producto
        </Link>

        <ProductSearchForm />
      </div>

      <ProductsTable products={products} />

      <ProductsPagination page={page} totalPages={totalPages} />
    </>
  )
}
