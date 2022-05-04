import React,{useState} from 'react';
import Navebar from './Componenet/Navbar';
import About from './Componenet/About';
import Text from './Componenet/Text';
import Alart from './Componenet/Alart'
function App() {

      const [mode,setMode]=useState('light')
      const [text,setText]=useState('Dark mode avilable')
      const [alart,setAlart]=useState(null)
      const toggleMode = ()=>{
             if(mode==='dark'){
               setMode('light');
               document.body.style.backgroundColor='white';
               setText('Light Mode Enable');
               alartMode('Light mode','info');
              

             }else{
               setMode('dark');
               document.body.style.backgroundColor='#649cce';
               setText('Dark Mode Enable');
               alartMode('Dark Mode','primary')
              
             }
      }

const alartMode=(masseg,type)=>{
             setAlart({
               masg:masseg,
               type:type
             })
             setTimeout( ()=>{
                setAlart(null)
             },2000)
}

  return (
   <div >
   <Navebar mode={mode} toggle={toggleMode} text={text}  />
   <Alart alart={alart} />
   <Text  mode={mode} />
   <About mode={mode}/>
   </div>
  );
}

export default App;
