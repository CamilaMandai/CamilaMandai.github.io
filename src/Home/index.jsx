import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import Skills from '../components/Skills';
// import Projects from '../components/Projects';
import Form from '../components/Form';

function Home() {
  return (
    <div>
      <NavigationBar />
      <Banner />
      <Skills />
      {/* <Projects /> */}
      <Form />
    </div>
  )
}

export default Home
