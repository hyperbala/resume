import Introduction from '../components/Introduction'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-10 lg:py-10 bg-gray-100">
      <div className='shadow-lg bg-white  m-auto lg:w-4/5 h-3/5 py-5 lg:py-0'>

      <Introduction />
      <div className='flex gap-5 lg:gap-10 w-full lg:flex-row flex-col pt-3 pb-3 px-5'>
        <div className='lg:w-2/5 lg:border-r-2 border-gray-200 flex flex-col gap-3 px-3'>
          <Contact />
          <Skills />
          <Education />
        </div>
        <div className='lg:w-3/5 flex flex-col gap-4 px-3'>
          <About />
          <Projects />
        </div>
      </div>
      </div>
    </main>
  );
}
