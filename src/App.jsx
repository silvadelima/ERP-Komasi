import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="w-24 h-24" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Vite + React
        </h1>
        
        <div className="text-center">
          <button
            onClick={() => setCount(count => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            count is {count}
          </button>
          
          <p className="mt-4 text-gray-600">
            Edit <code className="font-mono bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
