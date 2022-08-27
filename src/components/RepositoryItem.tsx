interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
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
