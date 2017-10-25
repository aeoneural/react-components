// TODO



// JSX allows you to write regular old HTML that gets procesed 
// down into createElement's.

// does react element return only one element ? 
// can you comment in react ? 

class GroceryListItem extends React.Component {
  
  constructor(props) { 
    super(props); 
    this.state = { 
      done: false
    }
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
       

      <li style={style} onClick={this.onListItemClick.bind(this)}> {this.props.groceryItem} </li>     

    )
  }
    
  
}

var GroceryList = (props) => {
  
 
  
  return(
  <ul> 
    {props.groceryItems.map(item => 
       <GroceryListItem groceryItem = {item} /> 
      )}
  </ul>
  )
  
};


 

ReactDOM.render(<GroceryList groceryItems = {['milk', 'banana', 'choco']}/>, document.getElementById("app"));


