import Link from "next/link"

type ProductsPaginationProps = {
    page: number
    totalPages: number
}

export default function ProductsPagination({ page, totalPages }: ProductsPaginationProps) {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <nav className="flex justify-center py-10">
            {page > 1 && (
                <Link href={`/admin/products?page=${page - 1}`} className={`px-4 py-2 bg-white text-gray-900 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0`}>
                    &laquo;
                </Link>
            )}

            {pages.map(current => (
                <Link key={current} href={`/admin/products?page=${current}`} className={`${current === page ? "bg-amber-500 text-white" : "bg-white text-gray-900"} px-4 py-2 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0`}>
                    {current}
                </Link>
            ))}

            {page < totalPages && (
                <Link href={`/admin/products?page=${page + 1}`} className={`px-4 py-2 bg-white text-gray-900 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0`}>
                    &raquo;
                </Link>
            )}
        </nav>
    )
}
