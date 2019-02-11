import React, { Component } from 'react';
import axios from 'axios'

class CryptoContainer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      coins: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/cryptocoins/index.json')
    .then(response => {
      console.log(response)
      this.setState({coins: response.data})
      console.log(response.data)
    })
    .catch(error => console.log(error))
  }

  

    render() {
      
      return (
        <div>
          Testando 1, 2, 3
          
              <div>
                {this.state.coins[0]}
              </div>
  
        </div>
      )
    }

}

export default CryptoContainer;
