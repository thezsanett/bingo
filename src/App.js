import { useState, useEffect } from 'react'
import './App.css';
import { buek } from './data'
import { buekJoker } from './data'

function App() {
  const initialdata = buek;
  const joker = buekJoker;
  const [randomData, setRandomData] = useState([]);
  const rows = [0, 5, 10, 15, 20];
  const tdStyle = {width: '100px', height: '100px', fontWeight: 'bold', border: '2px solid #cccccc', padding: '10px'}

  useEffect(() => {
    let array = initialdata;

    for (let ind = initialdata.length - 1; ind > 0; ind--) {
      const rand = Math.floor(Math.random() * (ind + 1));
      [array[ind], array[rand]] = [array[rand], array[ind]];
    }

    // array = array.slice(0, 22);
    array = array.slice(0, 24);
    // array.splice(Math.floor(Math.random() * 23), 0, '');
    // array.splice(Math.floor(Math.random() * 24), 0, '');
    array.splice(12, 0, joker);
    setRandomData(array);
  }, [])

  return (
    <div className="App">
      <table style={{borderCollapse: 'collapse', margin: '50px'}}>
        <tbody>
          {rows.map(chunk => 
            <tr key={chunk}>
              {randomData.slice(chunk, chunk+5).map(row =>
                <td key={row} style={tdStyle}>
                  {row}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
