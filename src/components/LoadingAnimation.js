import React from 'react'
import './LoadingAnimation.css'
export default function LoadingAnimation() {
    return (
        <div className='loadingAnimation'> 
            <div className='loadingText '> Gathering Information </div>
            <div className='loadingDots firstDot'> . </div>
            <div className='loadingDots secondDot'> . </div>
            <div className='loadingDots thirdDot'> . </div>
        </div>
    )
}