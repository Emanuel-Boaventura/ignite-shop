/* eslint-disable @next/next/no-img-element */
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { globalStyles } from '../styles/global';
import logoImg from '../assets/logo.svg';
import {
  MainContentContainer,
  Header,
  HeaderContent,
  CartButton,
  Cart,
  CartProduct,
  PageContainer,
} from '../styles/pages/app';
import { CartContext, CartProvider } from '../hooks/CartContext';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);

  const { cartItens, removeCartItem } = useContext(CartContext);

  return (
    <CartProvider>
      <PageContainer>
        <Header>
          <HeaderContent>
            <Link href='/'>
              <Image src={logoImg} alt='' />
            </Link>

            <CartButton
              onClick={() => setOpen((state) => !state)}
              hasItem={cartItens?.length > 0}
            >
              <Handbag size={24} weight='bold' />

              <span>{cartItens?.length}</span>
            </CartButton>
          </HeaderContent>

          <Cart open={open}>
            <h3>Sacola de compras</h3>

            <div className='productsSection'>
              {cartItens?.map((item) => (
                <CartProduct>
                  <Image src={logoImg} width={100} height={100} alt='' />

                  <div className='about'>
                    <p>{item.name}</p>

                    <strong>{item.price}</strong>

                    <button
                      onClick={() => removeCartItem(item.priceId)}
                      type='button'
                    >
                      Remover
                    </button>
                  </div>
                </CartProduct>
              ))}
            </div>

            <div className='buySection'>
              <div className='quantity'>
                <p>Quantidade</p>

                <p>X itens</p>
              </div>

              <div className='price'>
                <strong>Valor total</strong>

                <span>XXXX</span>
              </div>

              <button onClick={() => setOpen((state) => !state)} type='button'>
                Finalizar a compra
              </button>
            </div>
          </Cart>
        </Header>

        <MainContentContainer>
          <Component {...pageProps} />
        </MainContentContainer>
      </PageContainer>
    </CartProvider>
  );
}
