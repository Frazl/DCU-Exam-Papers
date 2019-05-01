import React, { Component } from 'react';
import './App.css';
import examPapers from './examPapers.json';

class App extends Component {
  constructor(){
    super()
    this.state = {
      'module': '',
      'year': '',
      'results': [],
    }
    this.handleInput = this.handleInput.bind(this)
    this.getResults = this.getResults.bind(this)
    this.displayResults = this.displayResults.bind(this)
    this.reverseYear = this.reverseYear.bind(this)
  }

  handleInput = (e) => {
    let name = e.target.id
    let value = e.target.value.toUpperCase()
    this.setState({
      [name]: value
    }, this.getResults)
  }

  getResults = () => {
    if(this.state.module.length > 1){
      let modules = Object.keys(examPapers).filter((moduleCode) => {
        return moduleCode.indexOf(this.state.module) === 0 
        })
      var results = []
      modules.map((moduleCode) => {
        let years = Object.keys(examPapers[moduleCode])
        years.map((year) => {
          let paper = [moduleCode.toUpperCase(), year, examPapers[moduleCode][year]]
          results.push(paper)
        })
      })
      this.setState({
        results: results
      })
    }
  }

  displayResults = () => {
    if(this.state.results !== ''){
    let tableEntry = []
    this.state.results.map((result) => {
      if (this.state.year === '' || -1 !== this.state.year.indexOf(result[1]))
      tableEntry.push(
        <tr>
        <td>{result[0]}</td>
        <td>{result[1]}</td>
        <td><a href={result[2]} target="_blank">Here</a></td>
        </tr>
      )
    })
    return tableEntry
  }
  }

  reverseYear = () => {
    let results = this.state.results.reverse()
    this.setState({
      results: results
    })
  }

  render(){
  return (
  <div className="Wrapper">
    <header>
    <h1 className="Title">DCU Exam Papers Backup</h1>
    <h5><a className='linkedin' href='https://www.linkedin.com/in/seanfradl/'>By Sean Fradl</a></h5>
    <input type="text" onChange={this.handleInput} id="module" className="Input-text" placeholder="Module Code" />
    <input type="text" onChange={this.handleInput} id="year" className="Input-text" placeholder="Year" />
    </header>
    <table>
    <thead>
    <tr>
      <td>Module Code</td>
      <td>Year <button onClick={this.reverseYear}>▲▼</button></td>
      <td>Link</td>
    </tr>
    </thead>
    <tbody>
    {this.displayResults()}
    </tbody>
    </table>
  <a href='https://www.linkedin.com/in/seanfradl/'><img className='sf' src='sf.png'></img></a>
  </div>
  );
}
}

export default App;
