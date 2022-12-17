/* eslint-disable react/jsx-no-bind */
/* eslint-disable @next/next/no-img-element */
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { globalStyles } from '../styles/global';
import { MainContentContainer, PageContainer } from '../styles/pages/app';
import { CartProvider } from '../hooks/CartContext';
import Header from '../components/header';
import Cart from '../components/cart';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);

  function displayCart() {
    setOpen(!open);
  }

  return (
    <CartProvider>
      <PageContainer>
        <Header displayCart={displayCart} />

        <Cart open={open} displayCart={displayCart} />

        <MainContentContainer>
          <Component {...pageProps} />
        </MainContentContainer>
      </PageContainer>
    </CartProvider>
  );
}
