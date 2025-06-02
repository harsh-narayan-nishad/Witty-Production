// 'use client';
// import Image from 'next/image';
// import big_banner from '../../../../public/images/big_banner.png';
// import featured_mobile_banner from '../../../../public/images/featured_mobile_banner.png';
// import ParallaxText from '@/components/Common/ParallaxImages';
// import companies_image from '../../../../public/images/companies.png';
// import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from './styles';
// import RevealCover from '@/components/Common/RevealCover';
// import { useIsMobile } from '../../../../libs/useIsMobile';
// export const imageVariants = {
//   hidden: {
//     scale: 1.6,
//   },
//   visible: {
//     scale: 1,
//     transition: {
//       duration: 1.4,
//       ease: [0.6, 0.05, -0.01, 0.9],
//       delay: 0.2,
//     },
//   },
// };

// const Featured = () => {
//   const isMobile = useIsMobile();
//   return (
//     <Wrapper>
//       <Inner>
//         <ImageContainer>
//           <RevealCover />
//           <Div
//             variants={imageVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ amount: 0.25, once: true }}
//           >
//             {isMobile ? (
//               <Image
//                 src={featured_mobile_banner}
//                 alt="featured_mobile_banner"
//                 fill
//               />
//             ) : (
//               // <Image src={big_banner} alt="big_banner" fill />
//               <video
//   src="/images/big_banner1.mp4"
//   autoPlay
//   muted
//   loop
//   playsInline
//   style={{
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     borderRadius: 'inherit',
//   }}
// />

//             )}
//           </Div>
//         </ImageContainer>
//         <h2>Featured and Seen in</h2>
//         <ParallaxImages>
//           <ParallaxText baseVelocity={-4}>
//             <Image src={companies_image} alt="comapanies" />
//           </ParallaxText>
//         </ParallaxImages>
//       </Inner>
//     </Wrapper>
//   );
// };

// export default Featured;


'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import big_banner from '../../../../public/images/big_banner.png';
import featured_mobile_banner from '../../../../public/images/featured_mobile_banner.png';
import ParallaxText from '@/components/Common/ParallaxImages';
import companies_image from '../../../../public/images/companies.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';

export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.error('Autoplay failed:', err);
      });
    }
  }, []);

  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
               <video
               ref={videoRef}
               src="/images/big_banner1.mp4"
               autoPlay
               muted
               loop
               playsInline
               style={{
                 width: '100%',
                 height: '100%',
                 objectFit: 'cover',
                 borderRadius: 'inherit',
               }}
             />
            ) : (
              <video
                ref={videoRef}
                src="/images/big_banner1.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'inherit',
                }}
              />
            )}
          </Div>
        </ImageContainer>
        <h2>Featured and Seen in</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src={companies_image} alt="comapanies" />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
