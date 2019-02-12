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
          <p>Aqui deveria entrar os dados das top 10 moedas com suas respectivas cotações em Reais.</p>
          <p>Repare que ao inspecionar o elemento da página com o server do Ruby on Rails ligado, na aba "console", aparecem os dados corrretos</p>
          <p> só não consegui passar eles para renderizar na página</p>
          
              <div>
                {this.state.coins[0]}
              </div>
  
        </div>
      )
    }

}

export default CryptoContainer;
