import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';

function App() {
  return (
    <div className='Wrap'>
      <Header/>
      <main>
          <MainVisual/>
      </main>
    </div>
  )
}

export default App;
