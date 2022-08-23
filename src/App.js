import './App.css';
import Review from './components/review';

function App() {
  return (
    <div className="App">
      <div className='reviews'>
        <h1>Opiniones de nuestros clientes</h1>
        <Review
          nombre='Álvaro'
          imagen='1'
          pais='España'
          trabajo='Data analyst'
          empresa='Samsung'
          review='Lorem ipsum dolor sit amet. Vel minus dolore eos quasi quaerat eos impedit voluptas et quod voluptatem.'
        />

        <Review
          nombre='Jack'
          pais='Alemania'
          imagen='2'
          trabajo='Web developer'
          empresa='Huawei'
          review='Eum voluptatem reiciendis eos galisum earum et beatae fugit est tenetur animi quo fuga voluptatem ut doloremque laborum eum magni perspiciatis!.'
        />

        <Review
          nombre='Ana'
          pais='Francia'
          imagen='3'
          trabajo='Ingeniera de telecomunicaciones'
          empresa='Telefónica'
          review='Est dignissimos adipisci At dolores voluptatem est quod beatae est explicabo tempore ut temporibus harum!'
        />
      </div>
    </div>
  );
}

export default App;
