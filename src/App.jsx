import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <div className="min-vh-100 bg-gradient">
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center justify-content-center py-4 py-md-5">
          <div className="col-12 col-sm-11 col-md-10 col-lg-8 col-xl-6">
            <Container>
              <Header />
              {privacy ? <PrivacyMessage /> : <DisplayCounter />}
              <Controls />
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
