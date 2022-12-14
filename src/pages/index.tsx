import Image from 'next/image';
import { HomeContainer, Product } from '../styles/pages/home';

import camiseta1 from '../assets/camisetas/1.png';
import camiseta2 from '../assets/camisetas/2.png';
// import camiseta3 from '../assets/camisetas/3.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <figure>
          <Image src={camiseta1} width={520} height={480} alt='' />

          <figcaption>
            <strong>Camiseta X</strong>

            <span>R$ 79,90</span>
          </figcaption>
        </figure>
      </Product>

      <Product>
        <figure>
          <Image src={camiseta2} width={520} height={480} alt='' />

          <figcaption>
            <strong>Camiseta X</strong>

            <span>R$ 79,90</span>
          </figcaption>
        </figure>
      </Product>
    </HomeContainer>
  );
}
