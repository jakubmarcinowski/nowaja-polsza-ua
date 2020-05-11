import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import Autosuggest from 'react-autosuggest'
import { init } from 'contentful-ui-extensions-sdk'
import '@contentful/forma-36-fcss/dist/styles.css'
import './index.css'
import contentfulClient from './contentful'
require('dotenv').config()

const getSuggestionValue = suggestion => suggestion.title

const renderSuggestion = suggestion => (
  <div className="f36-font-family--sans-serif">{suggestion.title}</div>
)

class App extends React.Component {
  static propTypes = {
    sdk: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      error: null,
      hasLoaded: false,
      items: [],
      suggestions: [],
    }
  }

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : this.state.items.filter(item =>
          item.title.toLowerCase().startsWith(inputValue)
        )
  }

  componentDidMount() {
    this.props.sdk.window.startAutoResizer()

    contentfulClient
      .getEntries({
        content_type: 'blogPost',
        select: 'fields.title,fields.slug',
      })
      .then(
        ({ items }) => {
          const mappedItems = items.map(i => ({
            title: i.fields.title,
            slug: i.fields.slug,
          }))
          const valueCandidate = mappedItems.find(
            ({ slug }) => slug === this.props.sdk.field.getValue()
          )
          this.setState({
            hasLoaded: true,
            items: mappedItems,
            filteredItems: mappedItems,
            value: valueCandidate ? valueCandidate.title : '',
          })
        },
        () => {
          this.setState({
            hasLoaded: true,
            error: 'Nie można pobrać tytułów artykułów.',
          })
        }
      )
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    })
  }

  onChange = (_, { newValue: value }) => {
    this.setState({ value })
    const chosenSuggestion = this.state.suggestions.find(
      sugg => sugg.title === value
    )
    if (chosenSuggestion) {
      this.props.sdk.field.setValue(chosenSuggestion.slug)
      this.props.sdk.field.setInvalid(false)
    } else if (!value) {
      this.props.sdk.field.removeValue()
      this.props.sdk.field.setInvalid(false)
    } else {
      this.props.sdk.field.setInvalid(true)
    }
  }

  render() {
    if (!this.state.hasLoaded) {
      return null
    }

    if (this.state.error) {
      return this.state.error
    }

    const inputProps = {
      placeholder: 'Wpisz tytuł artykułu',
      value: this.state.value,
      onChange: this.onChange,
    }

    return (
      <Autosuggest
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={{
          suggestionHighlighted:
            'f36-background-color--primary f36-color--white',
          input:
            'f36-padding--s f36-color--text-mid f36-font-size--m autosuggest__input',
          suggestionsContainer: 'autosuggest__suggestions-container',
          suggestionsContainerOpen: 'autosuggest__suggestions-container--open',
          suggestionsList: 'autosuggest__suggestions-list',
          suggestion:
            'f36-padding--s f36-color--text-mid f36-font-size--m autosuggest__suggestion',
        }}
        data-testid="autosuggest"
      />
    )
  }
}

export { App }

init(sdk => {
  ReactDOM.render(<App sdk={sdk} />, document.getElementById('root'))
})

if (module.hot) {
  module.hot.accept()
}
