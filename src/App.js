import { useEffect } from "react";
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Test from "./components/Test";
import Login from "./components/Login";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="/test" element={<Test />} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
