import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import AutoSlide01 from './component/AutoSlide01';
import AutoSlide02 from './component/AutoSlide02';

function App() {
  return (
    <div className='Wrap'>
      <Header />
      <main>
        <MainVisual />
        <AutoSlide01 />
        <AutoSlide02 />
      </main>
    </div>
  )
}

export default App;
