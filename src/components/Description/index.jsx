import styles from '@/components/Description/style.module.css';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

export default function Description() {

    const phrases = [
        'Vík í Mýrdal is a remote seafront village in south Iceland',
        'The glaciers Eyjafjallajökull and Mýrdalsjökull can also be seen on clear days',
        'With Eyjafjallajökull famously disrupting European air travel in 2010',
        'The cliffs of Reynisfjall mountain are home to seabirds such as puffins',
        'This is one of the best places for birdwatching in Iceland',
    ]

    return (
        <div className={styles.description}>
            {
                phrases.map((phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                })
            }
        </div>
    )
}

function AnimatedText({children}) {

    const text = useRef(null);

    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            const scroller = new LocomotiveScroll({
                el: document.documentElement,
                smooth: true
            });
    
            gsap.registerPlugin(ScrollTrigger);
    
            let ctx = gsap.context(() => {
                gsap.from(text.current, {
                    scrollTrigger: {
                        trigger: text.current,
                        start: '0px bottom',
                        end: 'bottom+=400px bottom',
                        scrub: true
                    },
                    left: '-200px',
                    opacity: 0
                })
    
            })
    
            return () => ctx.revert(); // <- cleanup!
        }
        
    }, [])

    return (
        <p ref={text}>{children}</p>
    )
}