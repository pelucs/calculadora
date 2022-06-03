import * as C from './Styles';
import { useState } from 'react';
import { cells } from './components/cells';

import Info from './components/info';

export default () => {

  const [numberDisplay, setNumberDisplay] = useState<string>("");

  const insertNumber = (cell: string) => {
    console.log(cell);

    if(cell === "CE"){
      setNumberDisplay("");
    } else if(cell === "<"){
      let subString = numberDisplay.substring(0, numberDisplay.length - 1);

      setNumberDisplay(subString);
    } else if(cell === "="){
      setNumberDisplay(eval(numberDisplay));
    } else{
      setNumberDisplay(`${numberDisplay}${cell}`);
    }
  }

  return(
    <C.Container>
      <C.Title>
        Calculadora
      </C.Title>
      <C.Box>
        <C.Display>
          <C.Number>
            {numberDisplay}
          </C.Number>
        </C.Display>
        <C.Cells>
          {cells.map((cell, key) => (
            <button key={key} onClick={() => insertNumber(cell)}>
              {cell}
            </button>
          ))}
        </C.Cells>
      </C.Box>

      <Info/>
    </C.Container>
  );
}