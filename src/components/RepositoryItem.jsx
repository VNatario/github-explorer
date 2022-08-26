export function RepositoryItem(props) {
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
