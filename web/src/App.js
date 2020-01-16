import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
// Componente: É uma fução que retorna um conteudo (html, css, js) - Ideal é um componente por arquivo // Bloco islado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Estado: Informações mantidas pelo componente (Lembrar do conceito de Imutabilidade)
//Propriedade: Propriedades são os atributos do HTML// Informações que um componente PAI passa para o componente FILHO
//<></> Fragment -> Serve para não acabar com estlização da página

function App() {
  const [devs, setDevs] = useState([]);


  useEffect(() =>{
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data){

    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
      <strong>Cadastrar</strong>
      <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>

    </div>
  );
}

export default App;
