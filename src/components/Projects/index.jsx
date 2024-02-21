import { useState, useRef, useLayoutEffect } from "react";
import Image from 'next/image';
import styles from './style.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Description() {

    const [selectedProject, setSelectedProject] = useState(0)
    const imageContainer = useRef(null)

    const projects = [
        {
            title: 'Solheimajokull',
            src: 'solheimajokull.jpg'
        },
        {
            title: 'Diamond Beach',
            src: 'DiamondBeach.jpg'
        },
        {
            title: 'Glacier',
            src: 'glacier.jpg'
        },
        {
            title: 'Myrdalsjokull',
            src: 'myrdalsjokull.jpg'
        }
    ];

    useLayoutEffect(() => {
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                smoothMobile: false,
                resetNativeScroll: true
            });
        });
    
            gsap.registerPlugin(ScrollTrigger);
    
            let ctx = gsap.context(() => {
                
                ScrollTrigger.create({
                    trigger: imageContainer.current,
                    start: '-=100pxpx',
                    end: document.body.offsetHeight,
                    pin: true
                })
                });
    
            return () => ctx.revert(); // <- cleanup!
        
    }, [])

    return (
        <div className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer} id="one">
                    <Image
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="selected project image"
                    />
                </div>
                <div className={styles.column} id="two">
                    <p>
                        Mýrdalsjökull Glacier is the fourth largest ice cap in Iceland.
                        It covers a whopping 232 sq. mi (600 sq. km) area and hides Katla Volcano in its depths.
                        The glacier is located in the southern part of Icelandic Highlands and is perfectly visible from the Ring Road. 
                    </p>
                </div>
                <div className={styles.column} id="three">
                    <p>
                        Sólheimajökull has several distinctive traits that separate it from other glaciers.
                        Firstly, it is incredibly easy to find, laying just off of the Ring Road that encircles Iceland.
                        Secondly, it is not surrounded by tall mountains, meaning those who ascend it can attain incredible views of the South Coast.
                        Thirdly, it is home to many walls of ice that can be climbed up with ice axes on certain tours.
                    </p>
                </div>
            </div>
            <div className={styles.projectList}>
                {
                    projects.map((project, i) => {
                        return <div onMouseOver={() => {setSelectedProject(i)}} className={styles.projectEl} key={`p_${i}`}>
                            <p>{project.title}</p>
                        </div>
                    })
                }
            </div>  
        </div>
    )
}