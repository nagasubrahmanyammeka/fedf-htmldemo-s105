function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function Props() {
  return (
    <div>
      <Greeting name="Venki" />
      <Greeting name="Ravi" />
    </div>
  );
}

export default PropsDemo;