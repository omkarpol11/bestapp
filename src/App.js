import React from "react";
import HookCounter from "./components/HookCounter";
//import Stylesheet from './components/Stylesheet';
//import Form from './components/Form'
//import Routing from './components/Routing'
//import LifeCycle from './components/LifeCycle'
//import LifeCycleA from './components/LifeCycleA'
//import LifeCycleB from './components/LifeCycleB'
//import PostList from './components/PostList'
import Hookobj from "./components/Hookobj";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HookCounter></HookCounter>
      </div>
    );
  }
}

export default App;
