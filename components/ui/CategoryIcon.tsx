"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Category } from "@/src/generated/prisma/client";

type CategoryIconProps = {
  category: Category;
}

export default function CategoryIcon({ category }: CategoryIconProps) {

  const params = useParams()
  const isActive = params.category === category.slug

  return (
    <div className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b ${isActive ? "bg-amber-500/30 border-amber-500" : "hover:bg-gray-100"}`}>
        <div className="relative size-16">
            <Image
                src={`/icon_${category.slug}.svg`}
                alt={`Imagen de la Categoría ${category.name}`}
                fill
            />
        </div>
        <Link className="text-lg font-bold" href={`/order/${category.slug}`}>
          {category.name}
        </Link>
    </div>
  )
}
