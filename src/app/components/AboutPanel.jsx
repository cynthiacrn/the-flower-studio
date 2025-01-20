import AboutUsImage from '@/app/components/svg/AboutUsImage'
import Footer from "@/app/components/Footer";

export default function AboutPanel() {
  return (
    <div className="relative">
      <div className="about-panel__container">
        <div className="about-panel__content">
          <div className="about-panel__content-image">
            <AboutUsImage />
          </div>
          <div className="flex flex-col gap-6">
            <p className="about-panel__text">
              ABOUT
            </p>
            <p className="about-panel__text z-10">
              US
            </p>
          </div>
          <div className="flex flex-row gap-6 font-eb-garamond z-10">
            <div className="w-1/2">
              My story with flowers began long before it became a profession – it is woven into the fabric of my life. It all started in a small garden, surrounded by plants and flowers, where every new bloom was a little wonder to discover. From a young age, I was captivated by the raw beauty and energy of flowers. My desire to understand and connect with nature led me to travel, exploring diverse landscapes and cultures. I was fortunate to live in Australia, where the vast wild spaces and the rich floral diversity deeply inspired me. There, I worked on local farms, immersed in a world where nature dictates its own rhythm. This journey nourished my creativity and strengthened my bond with the earth.
            </div>
            <div className="w-1/2">
              Then, my path brought me to Geneva, between the lake and the mountains, the perfect setting to continue nurturing my passion for flowers. Here, every season offers me a new palette of colors and scents, and every floral creation is an invitation to share this raw, natural beauty. In our shop, I offer arrangements that capture the very essence of nature, inspired by my travels and my intimate connection with the plant world.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
