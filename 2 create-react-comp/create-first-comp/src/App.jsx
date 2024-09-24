import Hello from "./Components/Hello"; {/* Importing Hello.jsx */}
import KgButton from "./Components/KgButton"; {/* Importing KgButton.jsx */}
import Reusable from "./Components/Reusable"; {/* Importing Reusable.jsx */}

function App(){
  return (
    <>
    <h1>Hello World</h1>
    {/* Importing the KgButton.jsx from the component Folder */}
    <KgButton/>

    {/* Importing the Hello.jsx from the component Folder */}
    <Hello/>

    {/* Importing the Reusable.jsx from the component Folder */}
    {/* Using Reusable 4 times by creating it just once */}
    <Reusable/>
    <Reusable/>
    <Reusable/>
    <Reusable/>
    </>
  )
}

export default App;