import React, { useState } from 'react';
import './index.css';
import paipe from './assets/lets-dev.png';



function App() {

  const [funcao, setFuncao] = useState<string>();

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFuncao(event.target.value);
  }

  return (
    <div id="container">
      <h1>Formulário 2 Edição</h1>

      <span> Seja bem-vindo(a) </span>

      <p id='instrução'> Preencha correntamente os campos abaixo para ingressar nessa SUPER JORNADA com o time Paipe</p>

      <img src={paipe} alt="Paipe" />

      <hr />

      <p id='aviso' style={{ marginBottom: 100 }}>
        <span style={{ fontWeight: 'bold' }}>Atenção:</span>os campos contendo o asterisco(*) sao de preenchimento obrigatório
      </p>


      <form action="">
        <div className='row'>
          <div className='column-input input-text'>
            <label>Nome Completo</label>
            <input
              type="text"
              placeholder="Nome Completo"
              name='nome'
              required
            />
          </div>


          <div className='column-input'>
            <label>Idade:</label>
            <input type="number" name='idade' placeholder='Digite sua idade' />
          </div>
        </div>

        <div className='row'>
          <div className='column-input select'>
            <label htmlFor="">Ocupação</label>
            <select>
              <option>Selecione sua ocupação</option>
              <option>Estudante</option>
              <option>Trabalhador CLT</option>
              <option>Trabalhador PJ</option>
              <option>Autonomo</option>
              <option>Outro</option>
            </select>
          </div>
        </div>

        <div className='column-input'>
          <label >Area de Preferência</label>

          <div className='row' style={{ gap: '25px' }}>
            <div className='row-selectors'>
              <input
                type="radio"
                name='area-de-preferencia'
                value="Front-end"
                id='front-end'
                onChange={handleClick}
              />
              <label htmlFor='front-end'>Front-end</label>
            </div>
            <div className='row-selectors'>
              <input
                type='radio'
                name='area-de-preferencia'
                value="Back-end"
                id='back-end'
                onChange={handleClick}
              />
              <label htmlFor='back-end'>Back-end</label>
            </div>
            <div className='row-selectors'>
              <input
                type='radio'
                name='area-de-preferencia'
                value="Full-stack"
                id='full-stack'
                onChange={handleClick}
              />
              <label htmlFor='full-stack'>Full-stack</label>
            </div>
          </div>
        </div>

        <div className='column-input'>
          <label>Anexar Currículo:</label>
          <input type="file" />
        </div>

        <div className='column-input' style={{ marginBottom: 50 }}>
          <label>Descrição do perfil do candidato:</label>
          <textarea name="descricao" placeholder='Nos fale um pouco sobre o seu perfil pessoal ae profissional' ></textarea>
        </div>

        <div className='column-input' style={{ marginBottom: '115px' }}>
          <div>
            <input type="checkbox" name='receber-email' id='receber-email' />
            <label htmlFor='receber-email'>Desejo receber notificacoes sobre vagas por e-mai</label>
          </div>
        </div>

        <div className='row' style={{ justifyContent: 'space-between' }}>
          <button type="submit">Cancelar</button>
          <input type="submit" value={'enviar'} />
        </div>

      </form>
    </div>
  )
}

export default App
