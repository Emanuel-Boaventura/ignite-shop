import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product';

function Product() {
  return (
    <ProductContainer>
      <ImageContainer>
        <ProductDetails>
          <h1>Camiseta X</h1>
          <span>R$ 79,99</span>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
            accusantium itaque libero aspernatur vitae quas amet, similique
            voluptate error fugit.
          </p>

          <button type='button'>Comprar agora</button>
        </ProductDetails>
      </ImageContainer>
    </ProductContainer>
  );
}

export default Product;
