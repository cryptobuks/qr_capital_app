import React, { Component } from 'react';
import axios from 'axios'
import CryptoContainer from './CryptoContainer'



class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return <div><h3>{this.props.text}</h3></div>
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: ""
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
    
  changeHandler(e) {
    this.props.parentFunction(e.target.value)
  }
  
  render() {
    return (
      <div>
        <label>{this.props.labelName}</label>
        <input type={this.props.inputType} id={this.props.id} onChange={this.changeHandler} />
      </div>
    )
  }
}

class LoginForm extends React.Component {
  isClicked = false

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }
  
  setUsername(username) {
    this.setState({username: username})
  }
  
  setPassword(password) {
    this.setState({password: password})
  }
  
  clickHandler() {
    // put your own code here
    if(this.state.username=="admin"&&this.state.password=="admin"){
      alert(`Entrou com sucesso!`)
      this.isClicked = true
      this.forceUpdate()
    }
    else{
      alert(`Usuário ou senha incorreta! \nps: tente "admin" "admin"`)
    }
    
    
    
  }

  
  render() {
    if(this.isClicked){
      return (
        <div>
          <h3>Entre:</h3>
          <p>usuário:</p>
          <Input id ="username" inputType="text" parentFunction={this.setUsername} placeholder="enter you username" />
          <p>senha:</p>
          <Input id ="password" inputType="password" parentFunction={this.setPassword} placeholder="senha" /> 
          <button onClick={this.clickHandler}>{"submit"}</button>
          <p></p>
          <CryptoContainer />
        </div>
      )
    }
    else{
      return (
        <div>
          <h3>Entre:</h3>
          <p>usuário:</p>
          <Input id ="username" inputType="text" parentFunction={this.setUsername} placeholder="enter you username" />
          <p>senha:</p>
          <Input id ="password" inputType="password" parentFunction={this.setPassword} placeholder="senha" /> 
          <button onClick={this.clickHandler}>{"submit"}</button>
        </div>
      )
    }
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <CryptoContainer />
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}


export default LoginForm;