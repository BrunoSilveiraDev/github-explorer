import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38331272?s=460&u=1a5273d43bb4e7f9ea3545807cac984d040e5a65&v=4"
            alt="Bruno Silveira"
          />
          <div>
            <strong>BrunoSilveiraDev/github-explorer</strong>
            <p>Application to search github repositories</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38331272?s=460&u=1a5273d43bb4e7f9ea3545807cac984d040e5a65&v=4"
            alt="Bruno Silveira"
          />
          <div>
            <strong>BrunoSilveiraDev/github-explorer</strong>
            <p>Application to search github repositories</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38331272?s=460&u=1a5273d43bb4e7f9ea3545807cac984d040e5a65&v=4"
            alt="Bruno Silveira"
          />
          <div>
            <strong>BrunoSilveiraDev/github-explorer</strong>
            <p>Application to search github repositories</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
