import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

const Home = () => {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://my-travel-guru-server-ahasanulalam.vercel.app/destinations`)
            .then(res => res.json())
            .then(data => {
                setDestinations(data)
                setLoading(false)
            })
            .catch(error => console.error(error))
    }, []);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const activeDestination = destinations[activeSlideIndex];
    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.realIndex);
    };
    if (loading) {
        return <h1>Loading....</h1>
    }


    return (
        <div>
            <Container className='d-flex mt-16'>

                <div className='d-flex w-full mx-auto flex justify-content-between'>
                    {/* Details Part */}
                    <div className=" w-25 text-white flex justify-content-center items-start flex-col">
                        <h1 className=''>{activeDestination.city}</h1>
                        <p className='my-4'>{activeDestination?.description.slice(0, 200)}...</p>
                        <Link to={`/destinations/${activeDestination.city_id}`}>
                            <button className='inline-flex items-center gap-3 bg-warning px-6 py-2 rounded'>Booking <AiOutlineArrowRight /></button>
                        </Link>
                    </div>
                    <div className="w-75">
                        <Swiper
                            effect={"coverflow"}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            loop={true}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                                loop: true
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                            className="mySwiper"
                            onSlideChange={handleSlideChange}
                            navigation={true}
                        >
                            {destinations.map((destination, index) => (
                                <SwiperSlide key={index}>
                                    {({ isActive }) => (
                                        <div className= {`${isActive && 'position-relative rounded-5 border border-warning'} `}>
                                            <img src={destination?.image} alt={destination?.city} className='' />
                                            <div className='position-absolute bottom-0 start-25 translate-middle-y'>
                                                <h2 className=''>{destination?.city}</h2>
                                            </div>
                                        </div>
                                        // <div className={`relative ${isActive && 'border-5'} border-primary h-100 rounded-3 w-50 bg-cover bg-center`}>
                                        //     <img src={destination?.image} alt={destination?.city} className='w-full h-full object-cover' />
                                        //     <div className='text-white text-center  transition-opacity duration-500'>
                                        //         <h2 className='text-4xl font-bold'>{destination?.city}</h2>
                                        //     </div>
                                        // </div>
                                    )}

                                    {/* <div className="card text-bg-dark ">
                                        <img
                                            src={destination.image}
                                            className="card-img m-auto"
                                            style={{ height: "600px"}}
                                            alt="..."
                                        />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">{destination.city}</h5>
                                            <p className="" style={{ fontSize: "9px" }}>
                                                {destination.description}
                                            </p>
                                        </div>
                                    </div> */}

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>


            </Container>
        </div>
    );
};

export default Home;