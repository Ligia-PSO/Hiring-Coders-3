import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Repositories() {
  const navigate = useNavigate();
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');//pega valor salvo no localstorage
    // repositoriesName=JSON.parse(repositoriesName);
    // setRepositories(repositoriesName);
    console.log(repositoriesName);

    if(repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);//transforma de volta em um objeto json
      setRepositories(repositoriesName);
      localStorage.clear();//limpar o storage
    } else {
      navigate('/')
    }
  }, []);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        { repositories.map(repository => {
          return (<S.ListItem> Repositório: { repository } </S.ListItem>)
        })}
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  )
}