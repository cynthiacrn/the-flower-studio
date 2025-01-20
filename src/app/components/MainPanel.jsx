import MainImage from '@/app/components/svg/MainImage'
import Footer from "@/app/components/Footer";

export default function MainPanel() {
  return (
    <div className="relative">
      <div className="main-panel__container">
        <div className="main-panel__content">
          <div className="main-panel__content-header">
            <h1 className="main-panel__title">
              Welcome to The Flower Studio, located in GENEVA.
            </h1>
            <div className="main-panel__image">
              <MainImage />
            </div>
          </div>
          <p className="main-panel__text">
            Between lakes and mountains, an environment that provides daily inspiration: reflecting our natural, poetic, and slightly wild universe.
          </p>
          <div className="main-panel__image-mobile">
            <MainImage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
