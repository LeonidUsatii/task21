import { useState } from 'react';

let isClick: boolean = true;

function Task1(): JSX.Element {
  const [nameOfButton, setNameOfButton] = useState<string>('Off');

  console.log(nameOfButton);

  function click(): void {
    if (isClick) {
      setNameOfButton('On');
      isClick = false;
    } else if (!isClick) {
      setNameOfButton('Off');
      isClick = true;
    }
  }
  return (
    <>
      <button onClick={click}>{nameOfButton}</button>
    </>
  );
}

export default Task1;
