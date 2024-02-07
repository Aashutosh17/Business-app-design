import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const Collaboration = () => {
    return (
        <section className="container-width py-32 text-center">
            <div className="w-[90%] md:w-3/4 lg:w-3/5 m-auto">
                {/* <p className="text-4xl sm:text-6xl font-extrabold"></p> */}
                <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    Our Notable Partners
                </h2>
                <p className="mt-9 text-slate-600">
                    We drive digital transformation for visionary companies and clients, propelling businesses to new
                    heights. Experience our innovative solutions, where expertise meets elegance on the path to success.
                </p>
            </div>

            <div className="w-full md:w-4/5 lg:w-[40%] m-auto mt-16 company-logo-crousel">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={4}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is >= 320px
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },

                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="w-44 h-16 mt-8  rounded-sm">
                            <img
                                src="https://imagedelivery.net/pO9dH1lJbG1aBymg4M2eXA/e0c1e6df-76a9-40e6-910c-fb659d941800/public"
                                alt="Lancemeup Logo"
                                className=" w-full object-contain h-full"
                            />
                        </div>
                    </SwiperSlide>
                    

                    <SwiperSlide>
                        <div className="w-44 h-36  rounded-sm">
                            <img
                                src="https://i.ibb.co/RT90RWc/Frame-30.jpg"
                                alt="Noditt Tech Logo"
                                className=" w-full object-contain h-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-44 h-32  rounded-sm">
                            <img
                                src="https://i.ibb.co/NVj1GSd/Protozoahostlogo1.png"
                                alt="ProtozoaHost Logo"
                                className=" w-full object-contain h-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-44 h-20 mt-5  rounded-sm">
                            <img
                                src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/295811344_170850822117576_6131752348213846873_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qvqq5705uMIAX9t6_vB&_nc_ht=scontent.fktm16-1.fna&oh=00_AfDu2W6sCHkpdWJmrRmj-1sOJ-gx1U9V-nTTwsqlVg7Rzw&oe=64BDA621"
                                alt="RONT Logo"
                                className=" w-full object-contain h-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-44 h-20 mt-5  rounded-sm">
                            <img
                                src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/359427598_103503526152073_5905682082894603408_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dAjiOFq7MYEAX8E_g-m&_nc_ht=scontent.fktm16-1.fna&oh=00_AfDWR4wxdRXssWuqgqxD3ttfpcl7zHunXmkvMweMa_p_SQ&oe=64BE50C2"
                                alt="Traffyic Logo"
                                className=" w-full object-contain h-full"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Collaboration;
