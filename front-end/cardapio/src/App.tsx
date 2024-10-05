import { useFoodData } from './hooks/useFoodData';
import Card from './components/card';
import { FoodData } from './interface/FoodData';
import './components/card.css';
import './App.css';

function App() {
  const { data } = useFoodData();

  if (data === undefined) {
    return <div>Servidor fora do ar, por favor aguarde</div>;
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data.data.map((foodData: FoodData) => (
          <Card
            key={foodData.id}
            preco={foodData.preco}
            nome={foodData.nome}
            descricao={foodData.descricao}
            status={foodData.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;