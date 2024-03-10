import React, { useState } from 'react';
import './Contact.css'
import ContactJS from './ContactJS';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useLottie } from 'lottie-react'
import linkedIn from '../../../../assets/lottie/linkedinColor.json'
export const Contact = () => {
  const { backSideData } = ContactJS()
  const [showBackSide, setShowBackSide] = useState(false)

  const createLinkedIn = { animationData: linkedIn, loop: true}
  const { View: newLinkedIn } = useLottie(createLinkedIn)

  return (
    <div className='Contact c'>
      <div className={`card ${showBackSide && 'rotate'} c f`}>
        <div className='front c f'>
          <div className='head c f'>
            <div className='c' style={{justifyContent: 'space-between'}}>
              <h2>Wanna work together?</h2>
              <button onClick={() => setShowBackSide(!showBackSide)}>More Info</button>
            </div>
            <div className='c' title='Lottie'>
              {newLinkedIn}
            </div>
          </div>
        </div>
        <div className='back c f'>
          {backSideData.map((info, index) => (
            <div className='c f' key={index}>
              <div className='head c'>
                <h2>{info.h2}</h2>
                <button onClick={() => setShowBackSide(!showBackSide)}>Hide</button>
              </div>
              <div className='c f' style={{borderBottom: '2px solid var(--white1)', paddingBottom: '1rem'}}>
                {info.information.map((obj, indexObj) => (
                  <div className='c' key={indexObj} style={{justifyContent: 'space-between', padding: '.5rem'}}>
                    <div className='c' style={{width: 'unset', borderBottom: index === 0 ? '2px solid var(--light2)' : ''}}>
                      <div className='c' style={{width: '20px', aspectRatio: 1, marginRight: 4}}>
                        <obj.icon style={{color: 'var(--light2)', fontSize: 20}}/>
                      </div>
                      {index === 0 ? (
                        <CopyToClipboard text={obj.data}>
                          <dfn data-info='Press To copy data'>{obj.data}</dfn>
                        </CopyToClipboard>
                      ) : (
                        <strong style={{
                          color: indexObj === 0 ?
                          'var(--white5)' :
                          indexObj === 1 ?
                          'orange' : 
                          indexObj === 2 &&
                          'var(--light3)'
                        }}>{obj.type}</strong>
                      )}
                    </div>
                    {index === 0 ? (
                      <strong>{obj.type}</strong>
                    ) : (
                      <span>{obj.data}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}