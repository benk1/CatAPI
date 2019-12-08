import React, {Component} from 'react';
import axios from 'axios';
import Cats from './components/Cats';
//import Cat from './components/Cat'
import SearchBar from './components/SearchBar';
import './App.css';

const  apiEndPoint = 'http://api.thecatapi.com/v1/breeds';

const searchingForName = (name) =>{
  console.log('cats name',name);
  return function(obj){
    console.log('my object',obj);
    return ((obj.name || obj.origin).toLowerCase().startsWith(name.toLowerCase() || !name)) 
  }
}

const searchingForCountry = (origin) =>{
  console.log('cats country',origin);
  return function(obj){
    console.log('my object',obj);
    return (obj.origin.toLowerCase().startsWith(origin.toLowerCase() || !origin)) 
  }
}

class App  extends Component {
  
  state = { 
    initialCats: [],
    cats: []
   }

   async componentDidMount() {
    const {data: cats} =  await axios.get(apiEndPoint)
    //console.log(cats.slice(0,5));
    this.setState({
      cats:cats,
      initialCats: cats
    })
   }


   handleChange = (e) => {
    const key = e.target.value.toLowerCase();
    //let cats = this.state.initialCats;
    const cats = this.state.initialCats.filter(searchingForName(key))
    this.setState({
     cats: cats
    })
  }

  handleChange1 = (e) => {
    const key = e.target.value.toLowerCase();
    //let cats = this.state.initialCats;
    const cats = this.state.initialCats.filter(searchingForCountry(key))
    this.setState({
     cats: cats
    })
  }

  handleSubmit =(e) =>{
    e.preventDefault();
    const cats = this.state.cats;
    this.setState({
      cats: ''
    })
  }
  
  render() { 
    const {cats} = this.state;
    
    return ( 
      <div className="container">
        <h2 className="center ">The Cat API</h2>
        
        <SearchBar cats={cats} handleChange={this.handleChange}  handleChange1={this.handleChange1} />
        
        <Cats cats={cats}  />
      
      </div>
     );
  }
}
 
export default App ;