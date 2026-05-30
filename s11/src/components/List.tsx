export type Item = {
  id: number | string;
  name: string;
  href?: string;
  action?: (arg0: Item) => void;
};

const ListItem = ({ item }: { item: Item }) => {
  const onClick = () => {
    if (item.action) {
      item.action(item);
    }
  };

  return (
    <li key={item.id}>
      <div onClick={onClick}>
        {item.name} | {item.id}
      </div>
      {item.href && (
        <a href={item.href} title="see more" target="_blank">
          see more
        </a>
      )}
    </li>
  );
};

const List = ({ title, items }: { title?: string; items?: Item[] }) => {
  return (
    <div>
      {title && <p>{title}:</p>}
      {items ? (
        <ul>
          {items.map((item) => (
            <ListItem item={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <div>empty</div>
      )}
    </div>
  );
};

export default List;
