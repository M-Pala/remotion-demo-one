// import React from 'react';
import { useEffect } from 'react';
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import './upperText.css'


export const UpperText: React.FC = () => {
  
  
  const frame = useCurrentFrame();
  const {durationInFrames, fps} = useVideoConfig();

  useEffect(()=>{
    console.log('frame : ', frame );
    console.log('logoTranslationProgress : ', logoTranslationProgress );
    
  },)

  const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 5],
		[1,0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

  

  const logoTranslationProgress = spring({
		frame: frame,
		fps,
		config: {
			damping: 100,
		},
	});

  const cardOutProgress = spring({
		frame: frame,
		fps,
		config: {
			damping: 100,
		},
	});

  const slideIn = interpolate(
		logoTranslationProgress,
		[0, 1],
		[-1000, 100]
	);

  const imgScaling = interpolate(
    logoTranslationProgress,
    [0,1],
    [2.5,1]
  )

  const slideOut = interpolate(
    frame,
    [durationInFrames - 90, durationInFrames - 80],
    [0,2000],
    {
      easing: Easing.bezier(.54,-0.47,1,.58),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}, 
  )








  const logoTranslationProgressSecond = spring({
		frame: frame-150,
		fps,
		config: {
			damping: 100,
		},
	});


  const slideInSecond = interpolate(
		// frame,
		// [durationInFrames - 80, durationInFrames -50],
    logoTranslationProgressSecond,
    [0,1],
		[-1100, 0],
    {
      // easing: Easing.bezier(.54,-0.47,1,.58),
      
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		},
	);

  const imgScalingSecond = interpolate(
    // frame,
    // [durationInFrames - 60, durationInFrames -50],
    logoTranslationProgressSecond,
    [0,1],
    [2.5,1],
    {
      // easing: Easing.bezier(.54,-0.47,1,.58),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		},
  )


  const upperTextIn = interpolate(
    frame,
    [durationInFrames - 160, durationInFrames -110],
    [200,50],
    {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}, 
  )

  const lowerTextIn = interpolate(
    frame,
    [durationInFrames - 160, durationInFrames -110],
    [850,1000],
    {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}, 
  )

  return (
    <AbsoluteFill style={{ backgroundColor: 'white'}}>
      
      <h1 className='upperText' style={{transform:`translateY(${upperTextIn}px)`}}>
        This is upper text
      </h1>
      
      {/* First card */}
      <div className='mainConatainer' style={{transform: `translate(${slideOut}px,${slideIn}px)`}}>
        <div className='cardContainer'>
          <h1 className='redText'>This is card top text</h1>
          <div className='cardImageContainer'>
            <img src="https://images.unsplash.com/photo-1660227165166-3c6b07a3fd3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="test" style={{transform: `scale(${imgScaling})`}} className='cardImage'/>
          </div>
          <h1>This is card bottom text</h1>
        </div>
      </div>
      {/* second card */}
      <div className='mainConatainer card2' style={{transform: `translateX(${slideInSecond}px)`}}>
        <div className='cardContainer'>
          <h1 className='redText'>This is card top text</h1>
          <div className='cardImageContainer'>
            <img src="https://images.unsplash.com/photo-1660227165166-3c6b07a3fd3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="test" style={{transform: `scale(${imgScalingSecond})`}} className='cardImage'/>
          </div>
          <h1>This is card bottom text</h1>
        </div>
      </div>

      <h1 className='lowerText' style={{transform:`translateY(${lowerTextIn}px)`}}>
        This is lower text
      </h1>

    </AbsoluteFill>
  )
}

export default UpperText