const Ingredient = (props) => {
  return (
    <li style={{ backgroundColor: props.ingredient.color }}>
      {props.ingredient.name}
      {props.type === 'add' ? (
        <button onClick={() => props.action(props.ingredient)}>
          +
        </button>
      ) : (
        <button onClick={() => props.action(props.index)}>
          X
        </button>
      )}
    </li>
  );
};

export default Ingredient;