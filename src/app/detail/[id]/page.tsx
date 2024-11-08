'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';

import { ArtWork } from "@/app/interfaces/artwork";
import { artWorks } from "@/mocks/artworks";
import styles from './styles.module.css'
import '../../globals.css'
import Link from "next/link";

export default function Detail() {
    const params = useParams();
    const id = params.id;
    const [ artWork, setArtWork ] = useState<ArtWork>({} as ArtWork);

    useEffect(() => {
        if (id) {
            const data = artWorks.find(a => a._id === id);
            setArtWork(data!);
        }
    }, [id])

    if (!artWork?.image) {
        return <div style={{ minHeight: '70vh', padding: '30px' }}>Loading...</div>;
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Image
                    src={artWork?.image}
                    alt={artWork?.name}
                    width={450}
                    className={styles.image}
                />
                <div className={styles.secondContainer}>
                    <div>
                        <p className={styles.name}>{artWork?.name}</p>
                        <p className={styles.date}>{artWork?.createdAt}</p>
                        <p className={styles.text}>{artWork?.category} | {artWork?.techniques} | {artWork?.sizeX} x {artWork?.sizeY} cms</p>
                        <p 
                            className={styles.text} 
                            style={{
                                paddingTop: 10
                            }}
                        >
                            {artWork?.description}
                        </p>
                    </div>
                    <div>
                        {
                            artWork?.state !== 'Sold' && (
                                <>
                                    <p className={styles.text}>Precio</p>
                                    <p className={styles.price}>{artWork?.price} Pesos</p>
                                    <button className={styles.btn}>PEDIR POR WHATSAPP</button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>

            <p className={styles.plays}>Obras Relacionadas</p>

            <div>
                <Swiper
                    cssMode
                    pagination
                    mousewheel
                    keyboard
                    modules={[Navigation, Mousewheel, Keyboard, Autoplay, Pagination]}
                    className="mySwiper"
                    autoplay={{
                        delay: 5000,
                    }}
                    loop={true}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        1300: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    // navigation={{
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // }}
                >
                    {artWorks?.map(item => (
                        <SwiperSlide key={item?._id + item?.name}>
                            <Link href={`/detail/${item?._id}`}>
                                <Image
                                    src={item?.image}
                                    alt="Cuadro"
                                    className={styles.img}
                                    width={300}
                                    height={300}
                                    loading="lazy"
                                />
                                <div>
                                    <p className={styles.playName}>{artWork?.name}</p>
                                    <p>{artWork?.price} pesos</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />
                </Swiper>
            </div>
        </div>
    )
}