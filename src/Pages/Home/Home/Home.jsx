import FlashSale from '../FlashSale/FlashSale';
import HomeBanner from '../HomeBanner/HomeBanner';
import SaleProducts from '../SaleProducts/SaleProducts';

function Home() {
  return (
    <div>
      <HomeBanner />
      <FlashSale />
      <SaleProducts />
    </div>
  );
}

export default Home;
