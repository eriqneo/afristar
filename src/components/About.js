

const About = () => {
  return (
    <section className='grid  grid-cols-1 md:grid-cols-2' id='about' >
      <div className='text-center max-w-xl ml-5'>
         <p className='text-lg mt-28 mb-5 animate__animated animate__bounceIn animate__delay-2s'>The spread of digital technologies can empower the poor with access to information,job opportunities, and all the services that improve their standards of living. At Afristar, we believe that digital technology can be a fundamental force for change in Africa, helping to support economic growth,deepen democratic governance and expand civil society engagement..
Equipping youth and women with technical skills like digital fluency will empower them to assume responsibilities like coding and virtual desidesign, which currently are in demand in the digital economy.
Creating awareness of soft skills like creativity and adaptability will enable young people to thrive in a fast paced digital economy in which employment will likely be about brief online tasks rather than onsite jobs.
          </p>
          <button className='mt-5 py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-md float-right'>Contact us</button>
      </div>
      <div>
        <img src="/abt1.png" alt="placeholder" className='w-full hover:scale-95' />
      </div>
    </section>
  )
}

export default About;