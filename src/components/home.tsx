import React from 'react'
import Image from 'next/image'
export default function HomeSection () {
  return (
    <div>
      <section className="section">
  <div className="container">
    <div className="content">
      <h1 className="title">
       Hello i am Web Developer
        <br className="hidden-lg" />
       Hamza Rafique
      </h1>
      <p className="description">
      A Tech Enthusiast | Learning HTML, CSS, typescript, React, and Next.Js | Enrolled in Governor Sindh Initiative for Gen AI, Web3 and Metaverse.
      </p>
      <div className="button-group">
        <button className="button primary-button">Hire me</button>
        <button className="button secondary-button">View Cv</button>
      </div>
    </div>
    <div className="image-container">
      <Image className="image" alt="hero" src="/hero.png" width={1200} height={1200} />
    </div>
  </div>
</section>

    </div>
  )
}
