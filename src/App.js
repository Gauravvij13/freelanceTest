import './App.css';
import './styles/global.scss';
import 'tailwindcss/tailwind.css';
import Header from 'components/Header';
import Main from 'components/Main';

function App() {
  return (
    <div className="App ">
      <Header />
      <Main />
    </div>
  );
}

export default App;
