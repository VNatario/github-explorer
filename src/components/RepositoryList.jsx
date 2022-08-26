import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositório</h1>

      <ul>
        <RepositoryItem repository="Unfom2" />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
