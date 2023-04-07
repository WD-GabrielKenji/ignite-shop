import Stripe from 'stripe'
import { GetStaticProps } from 'next'

import { stripe } from '@/lib/stripe'
import Link from 'next/link'
import Image from 'next/image'

import { HomeContainer, Product, SliderContainer } from '@/styles/pages/home'
import useEmblaCarousel from 'embla-carousel-react'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <HomeContainer>
        <div className="embla" ref={emblaRef}>
          <SliderContainer className="embla__container container">
            {products.map((product) => {
              return (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  prefetch={false}
                >
                  <Product className="embla__slide">
                    <Image
                      src={product.imageUrl}
                      width={520}
                      height={480}
                      alt=""
                    />

                    <footer>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </footer>
                  </Product>
                </Link>
              )
            })}
          </SliderContainer>
        </div>
      </HomeContainer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount as number) / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
