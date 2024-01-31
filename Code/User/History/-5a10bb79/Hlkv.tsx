import Link from 'next/link';
import { getCollectionProducts } from 'src/lib/bigcommerce/products/utils/get-collection-products';
import { GridTileImage } from './grid/GridTileImage';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({
    collection: 'hidden-homepage-carousel'
  });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className='w-full overflow-x-auto pb-6 pt-1'>
      <span className='bg-[url("https://res.cloudinary.com/dsewycgig/image/upload/v1703190079/ibc_assets/Fostering_Faith_Sliding_Banners_ymib3p.jpg") block w-full'></span>
      <ul className='flex animate-carousel gap-4'>
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.path}${i}`}
            className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'
          >
            <Link href={`${product.path}`} className='relative h-full w-full'>
              <GridTileImage
                alt={product.name}
                label={{
                  title: product.name,
                  amount:
                    product.prices.priceRange.max.value ||
                    product.prices.price.value,
                  currencyCode:
                    product.prices.priceRange.max.currencyCode ||
                    product.prices.price.currencyCode
                }}
                src={product.defaultImage?.url}
                fill
                sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
