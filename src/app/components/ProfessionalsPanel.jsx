import ProfessionalsImage from '@/app/components/svg/ProfessionalsImage'
import Footer from "@/app/components/Footer";

export default function ProfessionalsPanel() {
  return (
    <div className="relative">
      <div className="professionals-panel__container">
        <div className="professionals-panel__content-image">
          <ProfessionalsImage />
        </div>
        <div className="w-1/3">

        </div>
        <div className="professionals-panel__content">
          <h1 className="professionals-panel__title">
            PROFESSIONALS
          </h1>
          <div className="flex flex-row gap-6 font-eb-garamond">
            <div>
              Whether it's for a gathering, conference, or product launch, flowers add a refined and welcoming touch to your professional events. Your florist artisan in Geneva will guide you in creating bespoke floral arrangements perfectly tailored to your brand and objectives.
            </div>
            <div>
              Whether your needs are one-time or ongoing, every detail is thoughtfully considered to ensure your event stands out and leaves a lasting impression on your guests. Discover our services dedicated to businesses to elevate your spaces and professional events.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
