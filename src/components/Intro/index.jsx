'use client';
import { useLayoutEffect, useRef } from 'react';
import styles from '@/components/Intro/style.module.css';
import Image from 'next/image';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {
    
    const backgroundImg = useRef(null);
    const introImg = useRef(null);

    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            const scroller = new LocomotiveScroll({
                el: document.documentElement,
                smooth: true
            });
    
            gsap.registerPlugin(ScrollTrigger);
    
            let ctx = gsap.context(() => {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: document.documentElement,
                        start: 'top',
                        end: '+=500px',
                        scrub: true,
                    },
                })
        
                timeline
                    .from(backgroundImg.current, {clipPath: "inset(15%)"})
                    .to(introImg.current, {height: "200px"}, 0)
                });
    
            return () => ctx.revert(); // <- cleanup!
        }
        
    }, [])

    return (
        <div>

            <div ref={backgroundImg} className={styles.backgroundImage}>
                <Image
                    src={'/images/background.jpg'}
                    fill={true}
                    alt="background scenery"
                    priority={true}
                />
            </div>

            <div className={styles.introContainer}>
                <div ref={introImg} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                    <Image
                        src={'/images/introImg.jpg'}
                        fill={true}
                        alt="animal in the field"
                        priority={true}
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.7">
                    Vík í Mýrdal
                </h1>
            </div>
        </div>
    )
}