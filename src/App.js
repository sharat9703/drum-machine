import { useEffect,useState } from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    document.addEventListener('keydown',(event)=>{
      playSound(event.key.toUpperCase());
    });
  },[]);
  const [activeKey,setActiveKey] = useState("");
  const drumpad = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
    }
  ];
  let playSound =(selector)=>{
      const audio = document.getElementById(selector);
      console.log(audio);
      audio.play();
      setActiveKey(selector);
  }
  return (
    <div className="App">
      
         <div id= "drum-machine">
         <div id="heading"><h1>My Drum Machine</h1></div>
            <div id="display">{activeKey}</div>
                <div className="drum-pads">
                  {drumpad.map((drumpad)=>(
                    <div 
                    onClick={()=>{
                      playSound(drumpad.text);
                    }} 
                    className='drum-pad' 
                    id={drumpad.src}>
                      {drumpad.text}
                      <audio className='clip' id={drumpad.text} src={drumpad.src}> 
                      </audio>
                    </div>
                  ))}
                </div>
            
          </div>       
    </div>
    
  );
}

export default App;

