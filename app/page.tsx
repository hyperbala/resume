import Introduction from '../components/Introduction'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-4 lg:px-16 px-4 lg:py-5 gap-10">
      <Introduction />
      <div className='flex gap-5 lg:gap-10 w-full lg:flex-row flex-col'>
        <div className='lg:w-2/5 lg:border-r-2 border-gray-300 flex flex-col gap-3 px-3'>
          <Contact />
          <Skills />
          <Education />
        </div>
        <div className='lg:w-3/5 flex flex-col gap-4 px-3'>
          <About />
          <Projects />
        </div>
      </div>
    </main>
  );
}
