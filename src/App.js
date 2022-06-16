import  './Assets/styles/App.scss';
import MarkdownContainer from './Components/MarkdownContainer';

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">
          <h1>Markdown Previewer</h1>
          </a>
      </header>
      <MarkdownContainer/>
    </div>
  );
}

export default App;
