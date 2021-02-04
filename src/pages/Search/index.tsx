import React, { useState } from "react";
import "./styles.scss";
import Button from "../../core/components/Button";
import dayjs from "dayjs";

import { makeRequest } from "../../core/utils/index";

import { UserProps } from "../../core/types/User";
import ImageLoader from "./components/Loaders/ImageLoader";
import InfoLoader from "./components/Loaders/InfoLoader";

const Search = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState<UserProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input) {
      setError("Preencha o nome do repositório");
      return;
    }

    try {
      setIsLoading(true);
      makeRequest({ url: `/users/${input}` })
        .then((response: any) => setUser(response.data))
        .finally(() => {
          setIsLoading(false);
        });

      setShowResults(true);
      setError("");
    } catch (err) {
      setError("Repositório não existe");
    }
  };

  return (
    <div className="search-container">
      <div className="search-content">
        <h6 className="search-title">Encontre um perfil Github</h6>
        <form onSubmit={handleSubmit}>
          <input
            className="search-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <span className="error-message">{error}</span>
          <div className="search-button">
            <Button>Encontrar</Button>
          </div>
        </form>
      </div>
      {showResults && (
        <div className="search-results-container">
          {isLoading ? (
            <ImageLoader />
          ) : (
            showResults && (
              <div className="search-results-left">
                <img
                  className="search-results-image"
                  src={user?.avatar_url}
                  alt=""
                />
                <a className="results-button" href={user?.html_url}>
                  <Button>Ver perfil</Button>
                </a>
              </div>
            )
          )}
          {isLoading ? (
            <InfoLoader />
          ) : (
            showResults && (
              <div className="search-results-right">
                <div className="search-results-top">
                  <span className="github-box">
                    Repositórios públicos: {user?.public_repos}
                  </span>
                  <span className="github-box">
                    Seguidores: {user?.followers}
                  </span>
                  <span className="github-box">
                    Seguindo: {user?.following}
                  </span>
                </div>
                <div className="search-results-content">
                  <h4 className="search-results-title">Informações</h4>
                  <span className="github-info">
                    <strong>Empresa:</strong>
                    {user?.company}
                  </span>
                  <span className="github-info">
                    <strong>Website/Blog:</strong>
                    {user?.blog}
                  </span>
                  <span className="github-info">
                    <strong>Localidade:</strong>
                    {user?.location}
                  </span>
                  <span className="github-info">
                    <strong>Membro desde:</strong>
                    {dayjs(user?.created_at).format("DD/MM/YYYY")}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
