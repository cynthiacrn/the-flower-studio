'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import MainPanel from '@/app/components/MainPanel'
import ServicesPanel from '@/app/components/ServicesPanel'
import GalleryPanel from '@/app/components/ProfessionalsPanel'
import AboutPanel from '@/app/components/AboutPanel'

gsap.registerPlugin(ScrollTrigger)

const panelsData = [
  { name: 'Home', component: MainPanel, width: 1 },
  { name: 'Services', component: ServicesPanel, width: 1 },
  { name: 'Professionals', component: GalleryPanel, width: 1 },
  { name: 'About', component: AboutPanel, width: 1 },
]

export default function Page() {
  const containerRef = useRef(null)

  useEffect(() => {
    const panelContainerEl = containerRef.current
    const panelsEl = gsap.utils.toArray(".panel")
    const totalWidth = panelsData.reduce((acc, { width }) => acc + width * 100, 0)

    const snapPoints = panelsData.map((_, index) => {
      const offset = panelsData.slice(0, index).reduce((acc, p) => acc + p.width * 100, 0)
      return offset / (totalWidth - 100)
    })

    const scrollTween = gsap.fromTo(
      panelContainerEl,
      { translateX: 0 },
      {
        translateX: `-${totalWidth - 100}vw`,
        ease: 'none',
        scrollTrigger: {
          trigger: panelContainerEl,
          start: 'top top',
          end: `+=${panelContainerEl.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          snap: {
            snapTo: snapPoints,
            duration: { min: 0.4, max: 1 },
            ease: 'Power1.easeOut',
          },
        },
      }
    )

    panelsEl.forEach((panel, i) => {
      if (i === panelsEl.length - 1) {
        return
      }

      gsap.to(`.tab-${i + 1}`, {
        x: -panel.clientWidth - 16,
        ease: "none",
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: panel,
          scrub: true,
          pin: true,
          start: `top ${(panelsData[i].width - 1.0008) * -100}%`,
          end: () => `+=${panel.clientWidth}`,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section>
      <div ref={containerRef} className="panel-wrapper">
        {panelsData.map(({ component: Component, width }, i) => (
          <div key={i} className={`panel panel-${i + 1}`} style={{ width: `${width * 100}vw` }}>
            <Component />
          </div>
        ))}
      </div>
      <div className="tab-wrapper">
        {panelsData.slice(1).map(({ name }, i) => (
          <div key={i} className={`tab tab-${i + 1}`}><p>{name}</p></div>
        ))}
      </div>
    </section>
  )
}
