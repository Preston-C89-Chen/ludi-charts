import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ForceGraph } from './components/Graph/ForceGraph';
const nodes = [
  { id: "Arrays", group: 1 },
  { id: "Linked List", group: 1 },
  { id: "Tree", group: 1 },
  {id: "Graph", group: 2}
  // ... more nodes
];

const links = [
  { source: "Arrays", target: "Linked List", value: 1 },
  { source: "Tree", target: "Graph", value: 1 },
  // ... more links
];

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <ForceGraph nodes={nodes} links={links} options={{drag:true,label:true}}/>
      </div>
    </>
  )
}

export default App
