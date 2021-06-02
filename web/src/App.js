import React from 'react';
import './App.css';



function App() {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    const f  = async () => {
      const res = await fetch('http://localhost:3333/api/v1')
      const json = await res.json()
      setData(json)
    }
    f()
  }, [])

  return (
    <div className="App">
      API Response
      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default App;
