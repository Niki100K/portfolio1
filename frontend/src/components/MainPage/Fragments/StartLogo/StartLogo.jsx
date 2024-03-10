import React, { useCallback, useContext, useEffect, useState } from 'react'
import './StartLogo.css'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-scroll'
import { useLottie } from 'lottie-react'
import downArrow from '../../../../assets/lottie/down-arrow.json'
import { AppContext } from '../../../../AppContext'
const StartLogo = () => {
  const { refNavBar } = useContext(AppContext)
  const [ref1, inView1] = useInView({ triggerOnce: true })
  const optionArrow = { animationData: downArrow, loop: true }
  const { View: ViewArrow } = useLottie(optionArrow)

  const [correctHeight, setCorrectHeight] = useState(0)
  const handleHeight = useCallback(() => {
    setCorrectHeight(window.innerHeight)
  }, [])
  useEffect(() => {
    handleHeight()
    window.addEventListener('resize', handleHeight)
    return () => {
      window.removeEventListener('resize', handleHeight)
    }
  }, [handleHeight])
  return (
    <div className='StartLogo c' style={{height: correctHeight || window.innerHeight}} ref={ref1}>
      <div style={{width: '100%', height: '100%', position: 'absolute'}} ref={refNavBar}></div>
      <div className={`card ${inView1 && 'show'} c f`}>
        <h1>Full Stack Developer</h1>
      </div>
      <Link to='AnimationSkills' duration={1500} smooth={true} className={`scroll ${inView1 && 'show'} c f`}>
        <strong>Explore this way</strong>
          <div className='c'>
            {ViewArrow}
          </div>
      </Link>
    </div>
  )
}

export default StartLogo
