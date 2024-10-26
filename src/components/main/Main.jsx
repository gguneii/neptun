import BestSellers from "./BestSellers"
import SelectedProducts from "./SelectedProducts"
import SpecialOffers from "./SpecialOffers"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Main() {
  return (
    <main className="bg-[#f2f2f2]">
        <div className="" >
        <Swiper className="max-w-[800px] mx-auto mdl:mr-[10px] lgx:max-w-[980px] lgx:mt-[10px] lgx:mr-[10px] 2xl:mr-[140px] mt-[5px] px-1 md:px-[20px]"
        style={{
          "--swiper-navigation-color": "#ff8300",
          "--swiper-navigation-size": "12px",
        }}
          modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
          effect="fade" 
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          navigation=
          {{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true,
            // renderBullet:(index, className) =>{
            //   return `<span class="${className} w-2 h-2 rounded-full bg-[#fff] hover:bg-[#ff8300 ]transition-all duration-300 ${
            //     className.includes('swiper-pagination-bullet-active') ? 'bg-[#ff8300] w-6 rounded-lg' : ''
            //   }"></span>`;
            // },
           }}
          onSlideChange={() => "swiper changed"}
          onSwiper={(swiper) => swiper}
        >
          <SwiperSlide>
            <img className="w-full object-cover" src="./src/assets/swiper1.webp" alt="" />
            </SwiperSlide>
          <SwiperSlide> 
            <img className="w-full object-cover" src="./src/assets/swiper2.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
             <img className="w-full object-cover" src="./src/assets/swiper3.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="w-full object-cover" src="./src/assets/swiper4.webp" alt="" />
          </SwiperSlide>

          <div className="swiper-button-prev swiper-button" />
          <div className="swiper-button-next swiper-button" />

        </Swiper>

        <div className="max-w-[800px] mx-auto medias flex justify-around mdl:mr-[10px] lgx:max-w-[940px] lgx:justify-between mt-3 lgx:mr-[30px] 2xl:mr-[160px] pb-[40px]">
            <div className="media w-full">
              <img className="w-full object-cover" src="./src/assets/media1.png" alt="" />
              <div className="flex justify-between items-center bg-white">
                <h4 className="py-1 font-semibold text-[12px]">50 AZN 50 Bonus</h4>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="media w-full mx-4">
              <img className="w-full object-cover" src="./src/assets/media2.jpg" alt="" />
              <div className="flex justify-between items-center bg-white">
                <h4 className="font-semibold text-[12px] py-1">Neptunda dadli endirimler</h4>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="media w-full hidden mdl:block">
              <img className="w-full object-cover" src="./src/assets/media3.jpg" alt="" />
              <div className="flex justify-between items-center bg-white">
                <h4 className="whitespace-nowrap font-semibold text-[12px] p-1"> Heftesonu endirimler Neptunda</h4>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
        </div>
        </div>
        <SelectedProducts />
        <SpecialOffers />
        <BestSellers />
        <div></div>
    </main>
  )
}

export default Main