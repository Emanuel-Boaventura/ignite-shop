import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import stripe from '../lib/stripe';
import { ImageContainer, SuccessContainer } from '../styles/pages/success';

interface ISuccessProps {
  customerName: string;
  products: {
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: ISuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | IgniteShop</title>

        <meta name='robots' content='noindex' />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageContainer>
          {products.map((product) => (
            <div>
              <Image src={product.imageUrl} width={140} height={140} alt='' />
            </div>
          ))}
        </ImageContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          <strong>{products.length}</strong> camiseta(s) já está a caminho da
          sua casa.
        </p>

        <Link href='/'> Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(
    String(query.session_id),
    {
      expand: ['line_items', 'line_items.data.price.product'],
    }
  );

  const customerName = session.customer_details!.name;
  const products = session.line_items!.data.map((item: any) => ({
    imageUrl: item.price!.product.images[0],
  }));

  return {
    props: {
      customerName,
      products,
    },
  };
};
