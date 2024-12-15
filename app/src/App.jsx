import { useState } from 'react'


function App() {
  const[isOpen,setIsOpen]=useState(false)
  

  return (
    <>
     <nav className='bg-[#8B008B] text-white shadow-lg'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          <a href="#home">MyWebsite</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className='block md:hidden text-xl'>
          ☰
        </button>

        <div className={` ${isOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:items-center md:w-auto absolute md:static bg-[#8B008B]  w-full  left-0 top-14 md:top-auto transition-all duration-300 space-y-4 md:space-y-0 md:space-x-4  md:px-0 px-4`}>
          <a href="#home" className='px-4 py-2 bg-[#FF6347] md:py-2 md:mx-2 md:text-base hover:translate-y-[-10px] transition-all duration-300 rounded-lg hover:bg-white hover:text-[#8B008B]'>Home</a>
          <a href="#about" className='px-4 py-2 bg-[#FF6347] md:py-2 md:mx-2 md:text-base hover:translate-y-[-10px] transition-all duration-300 rounded-lg hover:bg-white hover:text-[#8B008B]'>About</a>
          <a href="#services" className='px-4 py-2 bg-[#FF6347] md:py-2 md:mx-2 md:text-base hover:translate-y-[-10px] transition-all duration-300 rounded-lg hover:bg-white hover:text-[#8B008B]'>Services</a>
          <a href="#contact" className='px-4 py-2 bg-[#FF6347] md:py-2 md:mx-2 md:text-base hover:translate-y-[-10px] transition-all duration-300 rounded-lg hover:bg-white hover:text-[#8B008B]'>Contact</a>
        </div>
      </div>
     </nav>

     <section id="home" className='bg-gradient-to-r from-[#8B008B] to-[#4B0082] text-white py-16 px-8'>
      <div className='mx-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between'>
        <div className='text-center md:text-left md:w-1/2 space-y-6'>
          <h1 className='text-5xl md:text-6xl font-extrabold font-[Poppins]'>Transform Your <span className='text-[#FFA500]'>Ideas</span> into <br></br><span className='underline decoration-[#FFA500]'>Reality</span></h1>
         <p className='text-lg md:text-xl font-light '>We've searched our database for all the emojis that are somehow related to Navigation. Here they are! There are more than 20 of them, but the most </p>
        <div className='space-x-4'>
          <button className='bg-[#FFA500] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#8B008B] shadow-md transition-all duration-300'><i className='fa fa-info-circle mr-2'></i>Get Started</button>
          <button className=' border border-[#FFA500] text-[#FFA500] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#8B008B] shadow-md transition-all duration-300'><i className='fa fa-info-circle mr-2'></i>Learn More</button>
        </div>
        </div>

        <div className='md:w-1/2 flex justify-center '>
        <img src="img.png" className='w-full max-w-md md:max-w-lg rounded-lg shadow-xl'></img></div>
      </div>
     </section>

     <section id="about" className='py-16 bg-[#f8f9fa]'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0'>
        <div className='md:w-1/2 flex justify-center'>
          <img src="img.png" className='w-full max-w-md md:max-w-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500'/>
        </div>
          <div className='md:w-1/2 space-y-6'>
          <h2 className='text-4xl font-extrabold text-[#8B008B] font-[Poppins] '>Who We Are</h2>
          <p className='text-lg md:text-xl font-light text-gray-600 '> We are a team of innovative thinkers, passionate about creating solutions that make a difference. Our approach is rooted in technology, design, and collaboration, ensuring that every project we work on is impactful and meaningful.
          </p>
          <p className='text-lg md:text-xl font-light text-gray-600'> We are a team of innovative thinkers, passionate about creating solutions that make a difference. Our approach is rooted in technology, design, and collaboration, ensuring that every project we work on is impactful and meaningful.
          </p>
          <div className='space-x-4'>
            <button className='bg-[#8B008B] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#4B0082] shadow-md transition-all duration-300'><i className='fas fa-rocket mr-2'></i>Our Misssion</button>
            <button className='border border-[#8B008B] text-[#8B008B] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#4B0082] hover:text-white shadow-md transition-all duration-300'><i className='fas fa-users'></i>Meet the Team</button>
          </div>
        </div>
        
      </div>
      </div>
     </section>

     <section className='relative bg-cover h-[400px] bg-fixed flex items-center justify-center' style={{backgroundImage:'url(img.png)'}}>
      <div className='absolute inset-0 bg-black opacity-50'></div>

      <div className='absolute text-center text-white space-y-4'>
        <h2 className='text-3xl font-extrabold'>Stay Updated</h2>
        <p className='text-lg'>Subscribe to our newsletter for the latest news and updates</p>
        <button className='bg-[#8B008B] text-white px-8 py-3 rounded-lg text-lg font-semobold'>Subscribe Now</button>
      </div>
     </section>

     <section id="services" className='py-16 bg-[#f0f4f8] text-[#333333] '>
      <div className='max-w-7xl mx-auto px-8'>
        <h2 className='text-4xl font-extrabold text-[#8B008B] text-center mb-12 font-[Poppins]'>Our Services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center'>
            <i className='fas fa-laptop-code  text-4xl text-[#8B008B] mb-4'></i>
            <h3 className='text-2xl font-semibold text-[#333333] mb-4'>Web Development</h3>
            <p className='text-lg text-gray-600 mb-6'>We build responsive, high-performance websites that are designed to scale with your business.</p>
           <button className='bg-[#8B008B] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#4B0082]'>Learn More</button>
          </div>
          <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center'>
            <i className='fas fa-mobile  text-4xl text-[#8B008B] mb-4'></i>
            <h3 className='text-2xl font-semibold text-[#333333] mb-4'>Web Development</h3>
            <p className='text-lg text-gray-600 mb-6'>We build responsive, high-performance websites that are designed to scale with your business.</p>
           <button className='bg-[#8B008B] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#4B0082]'>Learn More</button>
          </div>
          <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center'>
            <i className='fas fa-info  text-4xl text-[#8B008B] mb-4'></i>
            <h3 className='text-2xl font-semibold text-[#333333] mb-4'>Web Development</h3>
            <p className='text-lg text-gray-600 mb-6'>We build responsive, high-performance websites that are designed to scale with your business.</p>
           <button className='bg-[#8B008B] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#4B0082]'>Learn More</button>
          </div>
          <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center'>
            <i className='fas fa-laptop-code  text-4xl text-[#8B008B] mb-4'></i>
            <h3 className='text-2xl font-semibold text-[#333333] mb-4'>Web Development</h3>
            <p className='text-lg text-gray-600 mb-6'>We build responsive, high-performance websites that are designed to scale with your business.</p>
           <button className='bg-[#8B008B] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#4B0082]'>Learn More</button>
          </div>
          <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center'>
            <i className='fas fa-laptop-code  text-4xl text-[#8B008B] mb-4'></i>
            <h3 className='text-2xl font-semibold text-[#333333] mb-4'>Web Development</h3>
            <p className='text-lg text-gray-600 mb-6'>We build responsive, high-performance websites that are designed to scale with your business.</p>
           <button className='bg-[#8B008B] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#4B0082]'>Learn More</button>
          </div>
          <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center'>
            <i className='fas fa-laptop-code  text-4xl text-[#8B008B] mb-4'></i>
            <h3 className='text-2xl font-semibold text-[#333333] mb-4'>Web Development</h3>
            <p className='text-lg text-gray-600 mb-6'>We build responsive, high-performance websites that are designed to scale with your business.</p>
           <button className='bg-[#8B008B] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#4B0082]'>Learn More</button>
          </div>
          
        </div>
      </div>
     </section>
     <section id="contact" className='bg-white py-16 flex items-center justify-center'>
      <div className='bg-[#8B008B] px-8 py-10 rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-lg'>
        <h2 className='text-4xl font-extrabold text-center text-white mb-8'>Contact Us</h2>
        <form className='space-y-6'>
          <div className='flex flex-col sm:flex-row gap-6'>
            <div className='flex-1'>
              
                <label className='block text-lg font-medium text-white'>Name</label>
                <input className='mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B0082]'></input>
              
            </div>
            <div className='flex-1'>
              
              <label className='block text-lg font-medium text-white'>Email</label>
              <input className='mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B0082]'></input>
            
          </div>
          </div>
          <div className='flex-1'>
              
              <label className='block text-lg font-medium text-white'>Message</label>
              <textarea className='mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B0082]'></textarea>
            
          </div>
          <button className='w-full px-6 py-3 text-white bg-[#4B0082] rounded-lg text-lg font-semibold hover:bg-[#8B008B] transition-all duration-300'>Send Message</button>
        </form>
      </div>
     </section>


     <footer className='bg-[#8B008B] text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8'>
          <div>
            <h4 className='text-xl font-bold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <a href='#home' className='hover:underline'>Home</a>
              </li>
              <li>
                <a href='#about' className='hover:underline'>About</a>
              </li>
              <li>
                <a href='#services' className='hover:underline'>Services</a>
              </li>
              <li>
                <a href='#contact' className='hover:underline'>Contact</a>
              </li>
              </ul>
          </div>

          <div>
            <h4 className='text-xl font-bold mb-4'>Follow Us</h4>
            <div className='space-x-4'>
              <a href='#'><i className='fab fa-facebook'></i></a>
              <a><i className='fab fa-instagram'></i></a>
              <a><i className='fab fa-linkedin'></i></a>
              <a><i className='fab fa-github'></i></a>
            </div>
          </div>

          <div>
            <h4 className='text-xl font-bold mb-4'>Newsletter</h4>
            <p className='text-sm mb-4'>Stay Updated</p>
            <form>
              <input className='px-4 py-2 w-full rounded-lg border-none'></input>
              <button className='w-full py-2 bg-[#4B0082] text-white rounded-lg mt-3 '>Subscribe</button>
            </form>
          </div>

          <div>
            <h4>Contact Info</h4>
            <p className='text-sm mb-4'>123 Street Name,City,Country</p>
            <p className='text-sm mb-4'>Phone:+123 456 7890</p>
            <p className='text-sm mb-4'>Email: abc@gmail.com</p>
            </div>
        </div>
      </div>
     </footer>
    </>
  )
}

export default App
