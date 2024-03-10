import React, { useRef, useEffect } from 'react';
import app_food from '../../../../assets/HomeScreen-Image.jpg'
import './Projects.css'
export const Projects = () => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        let bounds;

        function rotateToMouse(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            };
            const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

            card.style.transform = `
                scale3d(1.01, 1.01, 1.01)
                rotate3d(
                    ${center.y / 100},
                    ${-center.x / 100},
                    0,
                    ${Math.log(distance) * 2}deg
                )
            `;

            card.querySelector('.Projects-glow').style.backgroundImage = `
                radial-gradient(
                    circle at
                    ${center.x * 2 + bounds.width / 2}px
                    ${center.y * 2 + bounds.height / 2}px,
                    #ffffff55,
                    #0000000f
                )
            `;
        }

        function handleMouseEnter() {
            bounds = card.getBoundingClientRect();
            document.addEventListener('mousemove', rotateToMouse);
        }

        function handleMouseLeave() {
            document.removeEventListener('mousemove', rotateToMouse);
            card.style.transform = '';
            card.style.background = '';
        }

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousemove', rotateToMouse);
        };
    }, []);

    const projects = [
        {
            h2: 'Android App',
            strong: 'waiter menu manager',
            p: 'perfect app for every waiter. With this app you don\'t need to search for pen or papper, only with one click you create order and with every new click you add every product you want. This app is made to make waiter work more easyer and fast. In this app you can create, remove app and watch you\'r live orders on previos orders. Also can see you total turnover for the niht. App is made for every human doesnt metter if you are old or right now you start you\'r carrer as a waiter. With this app you don\'t need paper menu, you can see how products is made it, how is made it and what is his price.',
            img: app_food
        },
    ]

    return (
        <div ref={cardRef} className='card projects-container c f'>
            <h1>Projects</h1>
            <div className="Projects-glow" />
            <div className='c f' style={{padding: '.5rem'}}>
                {projects.map((info, index) => (
                    <div className='project c' key={index}>
                        <div className='info c f'>
                            <h2>{info.h2}</h2>
                            <strong>{info.strong}</strong>
                            <p>{info.p}</p>
                        </div>
                        <div className='img c'>
                            <img src={info.img} alt='' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}