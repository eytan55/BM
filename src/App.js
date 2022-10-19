import './App.css';
import Header from './components/Header';
import ImageBackground from './components/ImageBackground';
import Paragraph1 from './components/Paragraph1';
import ImageBackground2 from './components/ImageBackground2';
import Paragraph2 from './components/Paragraph2';
import ImageBackground3 from './components/ImageBackground3';
import Paragraph3 from './components/Paragraph3';
import Form from './components/Form'; 

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <ImageBackground />
      <Paragraph1 />
      <ImageBackground2 />
      <Paragraph2 />
      <ImageBackground3 />
      <Paragraph3 />
      <Form />
  </div>
  );
}

export default App;
