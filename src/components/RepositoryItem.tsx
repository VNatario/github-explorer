import { Repository } from "./RepositoryList";

interface RepositoryItemProps {
  repository: Repository;
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description ?? "Sem descrição"}</p>
      <a target="_blank" href={props.repository.html_url}>
        Acessar repostitório
      </a>
    </li>
  );
}
