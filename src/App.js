import Row from "./components/Row";
import request from "./request";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone FrontEnd</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
    </div>
  );
}

export default App;
