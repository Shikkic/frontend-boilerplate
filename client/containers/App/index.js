
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import style from './style.css'

export default class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Header/>
        <MainSection/>
        {children}
      </div>
    )
  }
}
