'use client';
import Image from 'next/image';
import ic_import from '../../../../public/svgs/ic_import.svg';

import { Wrapper, Inner, SecondOverlay } from './styles';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const word = ['W', 'i', 't', 't', 'y'];

  const spans = useRef<any>([]); // Create a ref to store the span elements
  const imageRef = useRef(null);
  const secondOverlayRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(imageRef.current, {
      rotate: '360deg',
      ease: 'back.out(1.7)', // Easing function
      duration: 1.4,
    });
    tl.to(imageRef.current, {
      y: '-100%', // Move the spans up
      ease: 'back.out(1.7)', // Easing function
    });
    // Iterate through the span elements and animate them
    tl.to(spans.current, {
      y: '-100%', // Move the spans up
      ease: 'back.out(1.7)', // Easing function
      duration: 1.4, // Animation duration
      stagger: 0.05, // Stagger duration (0.2 seconds delay between each span)
    });
    // Animate both the wrapper and the second overlay almost at the same time
    tl.to([wrapperRef.current, secondOverlayRef.current], {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'back.out(1.7)',
      duration: 1,
      stagger: 0.2,
      onComplete: () => {
        setComplete(true);
      },
    });

    // Apply a small delay to one of the elements (adjust as needed)
    tl.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      ease: [0.83, 0, 0.17, 1] as any,
      duration: 1,
      // delay: -0.9, // Adjust this delay as needed to fine-tune the timing
    });
  }, [setComplete]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Inner>
          <Image ref={imageRef} src={ic_import} alt="import icon" />
          <div>
            {word.map((t, i) => (
              <div
                key={i}
                ref={(element) => (spans.current[i] = element)} // Assign ref to each span
              >
                {t}
              </div>
            ))}
          </div>
          

        </Inner>
      </Wrapper>
      {/* <SecondOverlay ref={secondOverlayRef}></SecondOverlay> */}
    </>
  );
};

export default Preloader;

// 'use client';
// import React, {useEffect} from 'react';
// import styled from 'styled-components';
// import { useRouter } from 'next/navigation'; // Step 1


// const Loader = () => {
//   const router = useRouter(); // Step 2


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.push('/');
//     }, 4000); // Match this with animation duration

//     return () => clearTimeout(timer); // Cleanup on unmount
//   }, [router]);
//   return (
//     <StyledWrapper>
//       <div className="card">
//         <div className="loader">
//           <p>loading</p>
//           <div className="words">
//             <span className="word">buttons</span>
//             <span className="word">forms</span>
//             <span className="word">switches</span>
//             <span className="word">cards</span>
//             <span className="word">buttons</span>
//           </div>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .card {
//     /* color used to softly clip top and bottom of the .words container */
//     --bg-color: #212121;
//     background-color: var(--bg-color);
//     padding: 1rem 2rem;
//     border-radius: 1.25rem;
//   }
//   .loader {
//     color: rgb(124, 124, 124);
//     font-family: "Poppins", sans-serif;
//     font-weight: 500;
//     font-size: 25px;
//     -webkit-box-sizing: content-box;
//     box-sizing: content-box;
//     height: 40px;
//     padding: 10px 10px;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     border-radius: 8px;
//   }

//   .words {
//     overflow: hidden;
//     position: relative;
//   }
//   .words::after {
//     content: "";
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(
//       var(--bg-color) 10%,
//       transparent 30%,
//       transparent 70%,
//       var(--bg-color) 90%
//     );
//     z-index: 20;
//   }

//   .word {
//     display: block;
//     height: 100%;
//     padding-left: 6px;
//     color: #956afa;
//     animation: spin_4991 4s infinite;
//   }

//   @keyframes spin_4991 {
//     10% {
//       -webkit-transform: translateY(-102%);
//       transform: translateY(-102%);
//     }

//     25% {
//       -webkit-transform: translateY(-100%);
//       transform: translateY(-100%);
//     }

//     35% {
//       -webkit-transform: translateY(-202%);
//       transform: translateY(-202%);
//     }

//     50% {
//       -webkit-transform: translateY(-200%);
//       transform: translateY(-200%);
//     }

//     60% {
//       -webkit-transform: translateY(-302%);
//       transform: translateY(-302%);
//     }

//     75% {
//       -webkit-transform: translateY(-300%);
//       transform: translateY(-300%);
//     }

//     85% {
//       -webkit-transform: translateY(-402%);
//       transform: translateY(-402%);
//     }

//     100% {
//       -webkit-transform: translateY(-400%);
//       transform: translateY(-400%);
//     }
//   }`;

// export default Loader;
