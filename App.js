import './App.css';
import FormHeading from './Components/FormHeading';
import FormProducts from './Components/FormProducts';
import FormValidation from './Components/FormValidation';
// import UseEffectMouseContainer from './Components/UseEffectMouseContainer';
// import UseEffectMouse from './Components/UseEffectMouse';
// import UseEffectHook from './Components/UseEffectHook';
// import ComponentsC from './Components/ComponentsC';
// import { UserProvider } from './Components/userContext';
// import InLine from './Components/InLine';
// import NameList from './Components/NameList';
// import UserGreating from './Components/UserGreating';
// import EventHandlingClass from './Components/EventHandlingClass';
// import EventHandlingFunct from './Components/EventHandlingFunct';
// import Counter from './Components/Counter';
// import LifeCycleA from './Components/LifeCycleA';
// import Message from './Components/Message'; {/* Setstate */}
// import Greet from './Components/Greet';
// import Welcome from './Components/Welcome';
// import './appStyles.css' --Styling -- Css Module
// import styles from './appStyles.module.css' --Styling -- Css Module


function App() {
  return (
    <div>
      <FormHeading/>
      <FormValidation/>
      <FormProducts/>
      {/* <UseEffectMouseContainer/> */}
      {/* <UseEffectMouse/> --Run effect only once */}
      {/* <UseEffectHook/> --Conditionally run effect */}
      {/*Step 2 - Context Api*/}
      {/* <UserProvider value = "Vikas">
      <ComponentsC/>
      </UserProvider> */}
      {/* <LifeCycleA/> */}
      {/* <h1 className="error">Error</h1>           --Styling -- Css Module  */}
      {/* <h1 className={styles.success}>Success</h1>   --Styling -- Css Module  */}
      {/* <InLine/> -> Styling Components using InLine */}
      {/* <NameList/> */} {/* Its is a List & Person is Key */}
      {/*<UserGreating/>*/}  {/* Conditional Rendering */}
      {/* <EventHandlingFunct/> */}
      {/* <EventHandlingClass roll = "04"/> */}
      {/* <Message/> */} {/* setState */}
      {/* <Counter/> */}
      {/* <Greet name= "Vikas"   heroName = "Iron Man">
        <p>This is children tag</p>
      </Greet>
      <Greet name= "Nikhil"  heroName = "Hulk">
        <button>Click Me Here</button>
      </Greet>
      <Greet name= "Prakash" heroName = "Captain America"/>
      <Greet name= "Sunita"  heroName = "Wonder Women"/>
      <Welcome name= "Shlok"   heroName = "Wonder Women"/> */}

    </div>
  );
}

export default App;
