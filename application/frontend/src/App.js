//code splitting using react lazy
import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//instant load components
import Navigation from "./components/navigation/Navigation.js";
import Footer from "./components/footer-comp/Footer.js";
import ScrollToTop from "./components/navigation/ScrollToTop.js";
import Loading from "./components/loading/Loading.js";

const Cover = lazy(() => import("./pages/Cover.js"));
const Category = lazy(() => import("./pages/Category.js"));
const Search = lazy(() => import("./pages/Search.js"));
const Competition = lazy(() => import("./pages/Competition.js"));
const Upload = lazy(() => import("./pages/Upload.js"));
const Post = lazy(() => import("./pages/PostPage.js"));
const SignIn = lazy(() => import("./pages/login/SignIn.js"));
const SignUp = lazy(() => import("./pages/login/SignUp.js"));
const About = lazy(() => import("./pages/About.js"));

export default function App() {
  //updates navbar component to switch icons
  const [update, setUpdate] = useState(() => 0.001);

  return (
    <Router>
      <div className="App bg-img" id="App">
        <Navigation update={update} setUpdate={setUpdate} />
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={Cover} />
          <Route exact path="/competition" component={Category} />
          <Route path="/competition/:id" component={Competition} />
          <Route path="/search/:id" component={Search} />
          <Route path="/upload">
            <Upload update={update} />
          </Route>
          <Route path="/signin">
            <SignIn update={update} setUpdate={setUpdate} />
          </Route>
          <Route path="/signup">
            <SignUp update={update} setUpdate={setUpdate} />
          </Route>
          <Route path="/post/:id">
            <Post update={update} />
          </Route>
          <Route path="/about" component={About} />
        </Suspense>
        <ScrollToTop />
        <div className="bg-light" style={{ minHeight: "31vh" }} />
        <Footer />
      </div>
    </Router>
  );
}
