import { useState } from 'react';

function Task2(): JSX.Element {
  const [component1, setComponent1] = useState<string>('');
  const [component2, setComponent2] = useState<string>('');
  const [component3, setComponent3] = useState<string>('');

  interface Pizza {
    component1?: string;
    component2?: string;
    component3?: string;
  }

  let pizza: Pizza = {};

  function addCheese(): void {
    setComponent1('Cheese');
    pizza.component1 = component1;
  }

  function addSausage(): void {
    setComponent2('Sausage');
    pizza.component2 = component2;
  }

  function addTomato(): void {
    setComponent3('Tomato');
    pizza.component3 = component3;
  }

  function Cancel(): void {
    setComponent1('');
    setComponent2('');
    setComponent3('');
  }

  return (
    <div>
      <div className="Pizza">
        <button onClick={addCheese}>Добавить сыр</button>
        <button onClick={addSausage}>Добавить колбасу</button>
        <button onClick={addTomato}>Добавить томат</button>
      </div>

      <h2>
        Приготовь пиццу: {component1} {component2} {component3}
      </h2>
      <button onClick={Cancel}>Отменить</button>
    </div>
  );
}

export default Task2;
