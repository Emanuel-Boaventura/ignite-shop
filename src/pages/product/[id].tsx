/* eslint-disable no-alert */
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Stripe from 'stripe';
import Head from 'next/head';
import { useContext } from 'react';

import stripe from '../../lib/stripe';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product';
import { CartContext } from '../../hooks/CartContext';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    priceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addItemCart } = useContext(CartContext);

  return (
    <>
      <Head>
        <title>{product.name} | IgniteShop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt='' />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={() => addItemCart(product)} type='button'>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { id: 'prod_MyuywATrDQmbLu' } }],
  fallback: true,
});

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const product = await stripe.products.retrieve(params!.id, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        priceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
