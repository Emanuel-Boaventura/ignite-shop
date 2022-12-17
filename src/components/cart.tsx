import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext } from '../hooks/CartContext';
import { CartProduct, CartContainer } from '../styles/components/cart';

interface ICartProps {
  displayCart: () => void;
  open: boolean;
}

function Cart({ displayCart, open }: ICartProps) {
  const { cartItens, removeCartItem } = useContext(CartContext);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        cartItens,
      });

      window.location.href = response.data.checkoutUrl;
    } catch (e) {
      setIsCreatingCheckoutSession(false);
      // eslint-disable-next-line no-alert
      alert('Falha ao redirecionar ao checkout!');
    }
  }

  const totalPriceUnitAmount =
    cartItens.reduce((acc, { price }) => {
      const formatedPrice = price.toString(); // "typeof price" says "string", but comport likes a number, so have to convert with ".toString()"
      return acc + Number(formatedPrice.replace(/\D/g, ''));
    }, 0) / 100;

  const totalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPriceUnitAmount);

  return (
    <CartContainer open={open}>
      <button className='closeButton' onClick={displayCart} type='button'>
        <X size={28} weight='bold' />
      </button>

      <h3>Sacola de compras</h3>

      <div className='productsSection'>
        {cartItens &&
          cartItens.map((item) => (
            <CartProduct>
              <Link href={`/product/${item.id}`}>
                <Image src={item.imageUrl} width={100} height={100} alt='' />
              </Link>

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

          <p>{cartItens.length} itens</p>
        </div>

        <div className='price'>
          <strong>Valor total</strong>

          <span>{totalPrice}</span>
        </div>

        <button
          disabled={isCreatingCheckoutSession}
          onClick={handleBuyProduct}
          type='button'
        >
          Finalizar a compra
        </button>
      </div>
    </CartContainer>
  );
}

export default Cart;
