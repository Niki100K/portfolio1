import React, { useEffect } from 'react';
import stars from '../../../../assets/8k_stars.jpg'
import { Parallax } from 'react-parallax';
import './AnimationSkills.css'
import { useInView } from 'react-intersection-observer'
export const AnimationSkills = () => {
    const [ref1, inView1] = useInView({ triggerOnce: true})
    const languages = [
        {
            translate: 'top',
            programingLanguage: [
                'html','css','python','cPlus','javascript','typescript','php','cSharp','ruby',
                'html','css','python','cPlus','javascript','typescript','php','cSharp','ruby',
            ]
        },
        {
            translate: 'middle',
            programingLanguage: [
                'java','go','jquery','laravel','rust','angular','vue','nestjs','sass',
                'java','go','jquery','laravel','rust','angular','vue','nestjs','sass',
            ]
        },
        {
            translate: 'bottom',
            programingLanguage: [
                'visual-studio','visual-studio-code','swift','kotlin','react','sql','wordpress','amazon','nodejs',
                'visual-studio','visual-studio-code','swift','kotlin','react','sql','wordpress','amazon','nodejs',
            ]
        },
    ]
    const skills = [
        {
            name: 'Front-end Development',
            language: [
                'HTML5, CSS3 (4+ years)',
                'JavaScript (ES6+) (3+ years)',
                'React / React Native (2+ years)',
            ]
        },
        {
            name: 'Back-end Development',
            language: [
                'Laravel, Php (2+ years)',
                'AWS S3, RDS (1+ years)',
                'SQL (2+ years)',
            ]
        },
    ]
    useEffect(() => {
        console.log(inView1);
    }, [inView1])
  return (
    <div className='AnimationSkills c f'>
        <div className='text c f'  ref={ref1}>
            <h2 className={inView1 ? 'show' : ''}>Let's change web industry together</h2>
            <p className={inView1 ? 'show' : ''}>With over 4 years of experience in front-end development and expertise in modern JavaScript (ES6+), HTML5, and CSS3, including proficiency in libraries such as Redux and the Context API.</p>
            <div className='con c'>
                {skills.map((info, index) => (
                    <div className={`card ${inView1 && 'show'} c f`} key={index}>
                        <h3>{info.name}</h3>
                        <div className='c' style={{justifyContent: 'flex-start', padding: '0 2rem'}}>
                            <ul>
                                {info.language.map((language, indexLanguage) => (
                                    <li key={indexLanguage}>{language}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Parallax bgImage={stars} strength={700} className='container c f'>
            {languages.map((info, index) => (
                <div className='c' style={{justifyContent: 'flex-start'}} key={index}>
                    <div className={`con ${info.translate} c`}>
                        {info.programingLanguage.map((language, indexLanguage) => (
                            <img src={require(`../../../../assets/skills/${language}.png`)} alt="" key={indexLanguage} />
                        ))}
                    </div>
                    <div className={`con ${info.translate} c`}>
                        {info.programingLanguage.map((language, indexLanguage) => (
                            <img src={require(`../../../../assets/skills/${language}.png`)} alt="" key={indexLanguage} />
                        ))}
                    </div>
                </div>
            ))}
        </Parallax>
    </div>
  )
}