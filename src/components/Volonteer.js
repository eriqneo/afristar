
const Volonteer = () => {
    
  return (
   <section className='grid grid-col-1 md:grid-cols-2 bg-amber-300' id='vol' >
    <div>
        <img src="/shake.png" alt="form" className='w-3/4 ml-3 hover:scale-95' />
    </div>
    <div className='max-w-sm text-center'>
          <p className='text-xl mt-28 mb-5 animate__animated animate__bounceIn animate__delay-4s'>At Afristar, our mission is to empower the youth and women to drive a meaningful change in technology for themselves, businesses, and Africa.
           click the buttons below to fill forms for either partnership and volonteership. An email will be sent to you to confirm on the same. Thank you.
          </p>
          <button className='float-right mt-5 py-4 px-6 bg-black hover:bg-gray-800 text-white rounded-md'>Volonteer</button>
          <button className='mt-5 py-4 px-6 bg-transparent border border-black hover:bg-white text-black rounded-md'>Partner With Us</button>
    </div>
   </section>
  )
}

export default Volonteer