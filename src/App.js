import './App.css';
import ItemCardList from './components/ItemCardList';
import { items } from './data/items';

const App = () => {
  return (
    <div>
      <h1>My Item List</h1>
      <ItemCardList items={items} />
    </div>
  );
};

export default App;