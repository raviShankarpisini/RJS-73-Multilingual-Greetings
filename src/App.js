import {Component} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {activeLanguage: languageGreetingsList[0].buttonText}

  onClickLanguage = event => this.setState({activeLanguage: event.target.value})

  renderLanguage = () => {
    const {activeLanguage} = this.state

    const filterLanguage = languageGreetingsList.filter(
      each => each.buttonText === activeLanguage,
    )
    const {imageAltText, imageUrl} = filterLanguage[0]

    return (
      <div>
        <img src={imageUrl} alt={imageAltText} />
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(each => (
            <li key={each.id}>
              <button
                type="button"
                onClick={this.onClickLanguage}
                value={each.buttonText}
              >
                {each.buttonText}
              </button>
            </li>
          ))}
        </ul>
        {this.renderLanguage()}
      </div>
    )
  }
}
// Replace your code here

export default App
