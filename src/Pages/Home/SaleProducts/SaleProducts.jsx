import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import SaleCard from '../SaleCard/SaleCard';

function SaleProducts() {
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className='relative min-h-96'>
      <Swiper
        slidesPerView={3.35}
        modules={[Navigation]}
        onSlideChange={(swiper) => setIsEnd(swiper.isEnd)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className='mySwiper'
      >
        <SwiperSlide>
          <SaleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SaleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SaleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SaleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SaleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SaleCard />
        </SwiperSlide>
      </Swiper>

      <div className='absolute right-0 flex items-center gap-2 -top-[114px]'>
        <button ref={prevRef} className={`p-3 rounded-full bg-secondary`}>
          <BsArrowLeft className='text-2xl' />
        </button>
        <button
          ref={nextRef}
          className={`p-3 rounded-full  ${
            isEnd ? 'bg-secondary/50' : 'bg-secondary'
          }`}
        >
          <BsArrowRight className={`text-2xl`} />
        </button>
      </div>
    </div>
  );
}

export default SaleProducts;
