import './App.css';
import { Canvas } from '@react-three/fiber';

import Index from './Components';
function App() {
  return (
    <div className="scene">
      <Canvas>
        <Index></Index>

      </Canvas>
      <div id="portal"></div>
    </div>
  );
}

export default App;
