import React, { Component } from 'react';
import './App.css';
import ClickClassOption1 from './session2/events/ClickClassOption1';
import ClickClassOption2 from './session2/events/ClickClassOption2';
import ClickClassOption3 from './session2/events/ClickClassOption3';
import ClickClassOption4 from './session2/events/ClickClassOption4';
import MasterComp from './session2/master-detail/MasterComp';
import LogginComp from './session2/conditional-rendering/LogginComp';
import ItemsListComp from './session2/list/ItemsListComp';
import EmployeesListComp from './session2/list/EmployeesListComp';
import FormComp from './session2/form-comp/FormComp';
import LifeCycleParent from './session2/life-cycle/LifeCycleParent';
import EmpList from './session2/fragment/EmpList';
import RefsDemoComp from './session2/Refs/RefsDemoComp';
// import ClickFunc from './session2/events/ClickFunc';

function App() {
  return (
    <div className="App">
      {/* <ClickFunc /> */}
      {/* <ClickClassOption1 /> */}
      {/* <ClickClassOption2 /> */}
      {/* <ClickClassOption3 /> */}
      {/* <ClickClassOption4 /> */}

      {/* <MasterComp /> */}

      {/* <LogginComp /> */}

      {/* <ItemsListComp /> */}
      {/* <EmployeesListComp /> */}
      {/* <FormComp /> */}

      {/* <LifeCycleParent /> */}

      {/* <EmpList /> */}

      <RefsDemoComp />
    </div>
  );
}

// // class App extends Component{
// //   render(){
// //     return(
// //       <div className="App">
// //         Hello World from Class Component...!!!
// //       </div>
// //     );
// //   }
// // }

export default App;