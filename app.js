class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style = {style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

var TodoList = (props) => {
  return (
    <ul>
      {props.todos.map(item =>
        <TodoListItem todo={item} />)}
    </ul>
  )}


var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

