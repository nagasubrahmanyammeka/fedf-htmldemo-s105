unction Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function ReusableComponents() {
  return (
    <div>
      <Button label="Save" onClick={() => alert(" You clicked on Save Button")} />
      <Button label="Delete" onClick={() => alert("You clicked on Deleted Button")} />
    </div>
  );
}
export default ReusableComponents;