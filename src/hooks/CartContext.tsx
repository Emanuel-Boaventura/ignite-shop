import { ReactNode, createContext, useState } from 'react';

interface ICartContext {
  cartItens: IItem[];
  addItemCart: (item: IItem) => void;
  changeQuantityCartItem: (itemPriceId: string, newQuantity: number) => void;
  removeCartItem: (itemPriceId: string) => void;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export interface IItem {
  name: string;
  imageUrl: string;
  priceId: string;
  price: number;
  quantity?: number;
}

interface IProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: IProviderProps) {
  const [cartItens, setCartItens] = useState<IItem[]>([]);

  function addItemCart(newItem: IItem) {
    const hasItem = cartItens.some((item) => item.priceId === newItem.priceId);

    if (!hasItem) return setCartItens((state) => [...state, newItem]);
    // eslint-disable-next-line no-alert
    return alert('ja tem'); // pra testa
  }

  function changeQuantityCartItem(itemPriceId: string, newQuantity: number) {
    setCartItens(
      cartItens.map((item) => {
        if (item.priceId === itemPriceId) {
          return { ...item, quantity: newQuantity };
        }

        return item;
      })
    );
  }

  function removeCartItem(itemPriceId: string) {
    setCartItens(cartItens.filter(({ priceId }) => itemPriceId !== priceId));
  }

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ cartItens, addItemCart, changeQuantityCartItem, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
}
