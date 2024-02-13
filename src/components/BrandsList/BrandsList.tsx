import { ComponentProps } from "react";
import BrandItem from "../BrandItem";

type BrandsListProps = {
  title: string;
  brands: Array<ComponentProps<typeof BrandItem>["brand"]>;
};

function BrandsListPage({ title, brands }: BrandsListProps) {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-5 text-center mt-14">{title}</h3>
      <div className="text-sm mb-5 mt-8 text-center">ALL</div>
      <nav className="max-w-screen-lg mb-16 mx-48">
        <ol className="text-sm grid grid-cols-6 gap-y-5 justify-items-center">
          {brands &&
            brands.result.map((brand) => (
              <li
                key={brand.id}
                className="text-slate-700 data-[active=true]:text-black data-[active=true]:font-semibold hover:text-black transition-all"
              >
                <BrandItem brand={brand} />
              </li>
            ))}
        </ol>
      </nav>
    </section>
  );
}

export default BrandsListPage;
