import {Provider, useSelector, useDispatch} from 'react-redux'
import './App.css';


import InputComponent from './components/InputComponent';
import OutputComponent from './components/OutputComponent'
import {getWeight, getHeight} from './redux'

function App() {

  const showResult = useSelector(state=>state.result.showResult)
  const dispatch = useDispatch()
  const weight = useSelector(state=>state.weight.weight)
  

  return (
      <div className="App">
        <InputComponent />
          {
            showResult && <OutputComponent />
          }
      </div>
  );
}

export default App;
