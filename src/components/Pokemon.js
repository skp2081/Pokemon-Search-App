
import React, {Component } from 'react';
import Loading from './Loading';
import Display from './Display';


class Pokemon extends Component {
  constructor(){
    super();
    this.state = {
      pokemonData: [],
      loading: false,
      query: '',
    }
  }
  // handleSearch function for search bar
  handleChange = e => {
    this.setState({
      query: e.target.value
    })
  }
  //  fetching data from APIS
  componentDidMount = () => {
    this.setState({loading: true});
      fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500`)
        .then(res => res.json())
        .then (({results}) => {
        const data = results.map((poke, i) =>
        ({name:poke.name , img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`})
        )
        return this.setState({pokemonData: data, loading:false});
        
    });
    
    }
  
  render(){
    const { loading, pokemonData, query} = this.state;
    let dispayArr = []
    if(query) {
      const  regexp = new RegExp(query, 'i')
      dispayArr = pokemonData.filter(poke => regexp.test(poke.name))
    } else {
      dispayArr = pokemonData
    }

    return (
      <React.Fragment>
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"  alt="title"/>
      </header>
        <div className="search">
          <input
            type="text"
            className="search-bar"
            onChange={this.handleChange}
            placeholder="Enter pokemon name..."
            autoFocus
          />
        </div>
        <div className="pokemon-container" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',gridGap:'30px'}}>
          {
            loading ? <Loading /> : dispayArr.map((pName,img) => <Display key={pName.name} {...pName} {...img} />)
          }
        </div>
        </React.Fragment>
    )
  }
}
export default Pokemon;
