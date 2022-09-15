import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import AutoSlide from './component/AutoSlide';

function App() {
  return (
    <div className='Wrap'>
      <Header />
      <main>
        <MainVisual />
        <AutoSlide />
      </main>
    </div>
  )
}

export default App;
