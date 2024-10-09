import './App.css'
import TestimonialGrid from './ui/testimonial-grid'

function App() {


  return (
    <section className='min-h-screen flex flex-col items-center bg-[--light-grayish-blue]'>

      <div  className='grow flex flex-row items-center justify-center max-w-[1440px]'>
        <TestimonialGrid />
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>

    </section>
  )
}

export default App
