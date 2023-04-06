import React, { useState } from 'react';

function App() {
  const arr = Array(5).fill(null);
  const colors = ['red', 'yellow', 'blue', 'pink', 'green'];

  const [color, setcolor] = useState();
  let name = [];
  for (let i = 0; i < arr.length * arr.length; i++) name.push(i);

  return (
    <div>
      {arr.map((x) => {
        return (
          <div style={{ display: 'flex' }}>
            {arr.map((y) => {
              let k = name.shift();
              return (
                <div
                  id={k}
                  onClick={() =>
                    (document.getElementById(k).style.background = color)
                  }
                  style={{
                    border: '1px solid black',
                    height: '50px',
                    width: '50px',
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
      <div style={{ display: 'flex' }}>
        {colors.map((item) => {
          return (
            <div
              onClick={() => setcolor(item)}
              style={{
                border: '1px solid black',
                height: '50px',
                width: '50px',
                background: item,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
