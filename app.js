class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this)
    console.log(this.props)
    return(
      <li>{this.props.groceries.item} {this.props.groceries.quantity}</li>
    )
  }
}

var TodoList = (props) => {
  console.log(props)
  return (
    <ul>
      {props.groceries.map(obj =>
        <TodoListItem groceries={obj} />)}
    </ul>
  )}


var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList groceries={[{item: 'Apples', quantity: 3}, {item: 'Bananas', quantity: 3}, {item: 'Oranges', quantity: 3}]} />
  </div>
);



ReactDOM.render(<App />, document.getElementById("app"));

