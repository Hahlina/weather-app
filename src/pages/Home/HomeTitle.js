
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
 export const HomeTitle = ()=>{
	return`
	    <main class="main">
      <section class="weatherToday">
      </section>
      <section class="swiper swiper-1" >
        <div class="swiper-wrapper swiper-wrapper-1">
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </section>
      <section class="swiper swiper-2">
       <div class="swiper-wrapper swiper-wrapper-2 allInfoOfDay">
        </div>
         <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </section>
    </main>
	`
}