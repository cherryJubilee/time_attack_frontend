import Link from "next/link";

type BrandItemProps = {
  brand: {
    id: string;
    nameKr: string;
    nameEn: string;
  };
};

function BrandItem({ brand }: BrandItemProps) {
  return (
    <Link href={`/brands/${brand.id}`}>
      <div className="text-xs">{brand.nameKr}</div>
    </Link>
  );
}

export default BrandItem;
