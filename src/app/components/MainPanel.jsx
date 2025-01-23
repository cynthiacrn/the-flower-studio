import MainImage from '@/app/components/svg/MainImage'
import Footer from '@/app/components/Footer'
import { gsap } from 'gsap'
import { useEffect } from 'react'

export default function MainPanel() {
  useEffect(() => {
    gsap.fromTo(
      '.main-panel__title-line span',
      {
        y: 100,
        opacity: 0,
        rotation: 3
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        delay: 0.5,
        ease: 'power4.out',
      }
    )

    gsap.fromTo(
      '.main-panel__image, .footer__container',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.6,
        delay: 0.5,
        ease: 'power4.out',
      }
    )

    gsap.fromTo(
      '.main-panel__text-line span',
      {
        y: 100,
        opacity: 0,
        rotation: 3
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        delay: 0.7,
        ease: 'power4.out',
      }
    )
  }, [])

  return (
    <div className="relative">
      <div className="main-panel__container">
        <div className="main-panel__content">
          <div className="main-panel__content-header">
            <div className="flex flex-col">
              <div className="main-panel__title-line">
                <span className="main-panel__title">
                  Welcome
                </span>
              </div>
              <div className="main-panel__title-line">
                <span className="main-panel__title">
                 to The
                </span>
              </div>
              <div className="main-panel__title-line">
                <span className="main-panel__title">
                  Flower
                </span>
              </div>
              <div className="main-panel__title-line">
                <span className="main-panel__title">
                  Studio,
                </span>
              </div>
              <div className="main-panel__title-line">
                <span className="main-panel__title">
                  located
                </span>
              </div>
              <div className="main-panel__title-line">
              <span className="main-panel__title">
                in GENEVA.
              </span>
              </div>
            </div>
            <div className="main-panel__image">
              <MainImage />
            </div>
          </div>
          <div className="main-panel__text">
            <p className="main-panel__text-line">
              <span>Between lakes and mountains, an environment that </span>
            </p>
            <p className="main-panel__text-line">
              <span>provides daily inspiration: reflecting our natural, poetic, </span>
            </p>
            <p className="main-panel__text-line">
              <span>and slightly wild universe.</span>
            </p>
          </div>
          <div className="main-panel__image-mobile">
            <MainImage />
          </div>
        </div>
      </div>
      <div className="footer__container">
        <Footer />
      </div>

    </div>
  )
}
