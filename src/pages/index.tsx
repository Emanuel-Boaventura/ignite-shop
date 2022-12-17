import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useKeenSlider } from 'keen-slider/react';
import Stripe from 'stripe';
import { Handbag } from 'phosphor-react';

import { useContext } from 'react';
import { HomeContainer, Product, PageContainer } from '../styles/pages/home';

import 'keen-slider/keen-slider.min.css';
import stripe from '../lib/stripe';
import { CartContext } from '../hooks/CartContext';

interface IHomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    priceId: string;
    price: number;
  }[];
}

export default function Home({ products }: IHomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const { addItemCart } = useContext(CartContext);

  return (
    <PageContainer>
      <Head>
        <title>Home | IgniteShop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map((product) => (
          <Link
            key={product.id}
            passHref
            href={`/product/${product.id}`}
            prefetch={false}
          >
            <Product className='keen-slider__slide'>
              <figure>
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt=''
                  priority
                />

                <figcaption>
                  <div className='about'>
                    <strong>{product.name}</strong>

                    <span>{product.price}</span>
                  </div>

                  <button onClick={() => addItemCart(product)} type='button'>
                    <Handbag size={32} weight='bold' />
                  </button>
                </figcaption>
              </figure>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      priceId: price.id,
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};

/* 
  pegar os atributos do item selecionado (ja estao em tela), e além deles o default_price.id,
  enviar os dados para a context api, e mostrar apenas o necessario na tela,
  ao clicar em comprar DENTRO do carrinho fazer um requisiçao parecida com a do "succes.tsx"
  na pagina do produto apenas adiciona o item na sacola

  enviar no body da requisiçao um array com o priceId e quantidade do item



  ANOTHER THINGS:
  fazer o logo do ignite shop retornar para home
*/
