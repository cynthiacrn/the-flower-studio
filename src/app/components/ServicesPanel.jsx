import {useEffect, useRef} from 'react'
import FirstServicesImage from '@/app/components/svg/FirstServicesImage'
import SecondServicesImage from '@/app/components/svg/SecondServicesImage'
import ThirdServicesImage from '@/app/components/svg/ThirdServicesImage'
import Footer from '@/app/components/Footer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesPanel() {
  const containerRef =useRef()

  useEffect(() => {
    gsap.fromTo(
      '.services-panel__content-image',
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top -100%',
          // end: '50% -10%',
          scrub: true,
          markers: true
        },
      }
    )
    //
    // gsap.fromTo(
    //   text,
    //   { x: -50, opacity: 0 },
    //   {
    //     x: 25,
    //     opacity: 1,
    //     duration: 1.5,
    //     ease: 'power3.inOut',
    //     scrollTrigger: {
    //       trigger: section,
    //       start: 'top bottom',
    //       end: 'bottom top',
    //       scrub: true,
    //     },
    //   }
    // )
  }, [])

  return (
    <div className="relative">
      <div  ref={containerRef} className="services-panel__container">
        <div className="services-panel__content">
          <div className="services-panel__content-section">
            <div className="services-panel__content-image">
              <FirstServicesImage />
            </div>
            <div className="services-panel__text-content">
              <h1 className="services-panel__title">
                Your Beautiful Days
              </h1>
              <p className="services-panel__text">
                Whether it's a wedding, christening, reception, or birthday, flowers play a central role in every event. They bring freshness, joy, and softness, while enhancing the atmosphere. I listen to your wishes and commit to creating floral arrangements that perfectly reflect your desires, carefully selecting each flower for its beauty, colors, textures, and fragrance. These subtle details will make every moment an unforgettable memory.
              </p>
            </div>
          </div>

          <div className="services-panel__content-section sm:flex-row-reverse">
            <div className="services-panel__content-image">
              <SecondServicesImage />
            </div>
            <div className="services-panel__text-content">
              <h1 className="services-panel__title">
                Interior Decorations
              </h1>
              <p className="services-panel__text">
                Flowers are not just for events; they can also transform your home into a living, inspiring space. Whether adding a pop of color to your living room, personalizing an office, or creating a warm atmosphere in an entryway, each floral arrangement is designed to complement your style and the mood of your home. I listen to your preferences and help you choose the plants that will enhance your interior, bringing a touch of freshness and serenity. Every arrangement is crafted to infuse positive energy and create an environment where you’ll feel at ease.
              </p>
            </div>
          </div>

          <div className="services-panel__content-section">
            <div className="services-panel__content-image">
              <ThirdServicesImage />
            </div>
            <div className="services-panel__text-content">
              <h1 className="services-panel__title">
                Tailored Creations
              </h1>
              <p className="services-panel__text">
                Every floral project is a unique creation, designed according to your wishes. Whether it's a bouquet, table centerpieces, or the decoration of an entire venue, I take the time to understand your vision to craft floral compositions that reflect your personality. You are supported throughout the process, ensuring every moment is marked by a touch of beauty and elegance tailored to you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
