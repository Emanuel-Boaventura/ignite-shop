import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../hooks/CartContext';
import { CartProduct, CartContainer } from '../styles/components/cart';

interface ICartProps {
  displayCart: () => void;
  open: boolean;
}

function Cart({ displayCart, open }: ICartProps) {
  const { cartItens, removeCartItem } = useContext(CartContext);

  return (
    <CartContainer open={open}>
      <h3>Sacola de compras</h3>

      <div className='productsSection'>
        {cartItens &&
          cartItens.map((item) => (
            <CartProduct>
              <Image src={item.imageUrl} width={100} height={100} alt='' />

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

        <button onClick={displayCart} type='button'>
          Finalizar a compra
        </button>
      </div>
    </CartContainer>
  );
}

export default Cart;
