import React from 'react'
import { App } from './index'
import { render, fireEvent, cleanup } from '@testing-library/react'
import contentfulClient from './contentful'

jest.mock('./contentful', () => ({
  getEntries: jest.fn(),
}))

function renderComponent(sdk) {
  return render(<App sdk={sdk} />)
}

const articles = [
  {
    fields: {
      title: 'First',
      slug: 'first',
    },
  },
  {
    fields: {
      title: 'Second',
      slug: 'second',
    },
  },
  {
    fields: {
      title: 'Third',
      slug: 'third',
    },
  },
  {
    fields: {
      title: 'Fourth',
      slug: 'fourth',
    },
  },
  {
    fields: {
      title: 'Fifth',
      slug: 'fifth',
    },
  },
]

const sdk = {
  field: {
    getValue: jest.fn(),
    onValueChanged: jest.fn(),
    setValue: jest.fn(),
    removeValue: jest.fn(),
    setInvalid: jest.fn(),
  },
  window: {
    startAutoResizer: jest.fn(),
  },
}

describe('App', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  afterEach(cleanup)

  // it('should read a value from field.getValue() and subscribe for external changes', () => {
  //   sdk.field.getValue.mockImplementation(() => 'initial-value')
  //   const { getByTestId } = renderComponent(sdk)

  //   expect(sdk.field.getValue).toHaveBeenCalled()
  //   expect(sdk.field.onValueChanged).toHaveBeenCalled()
  //   expect(getByTestId('my-field').value).toEqual('initial-value')
  // })

  it('should call starstartAutoResizer', () => {
    contentfulClient.getEntries.mockImplementation(() => Promise.reject())
    renderComponent(sdk)
    expect(sdk.window.startAutoResizer).toHaveBeenCalled()
  })

  it('should handle error', async () => {
    contentfulClient.getEntries.mockImplementation(() => Promise.reject())
    const { getByText, queryByTestId } = renderComponent(sdk)
    await (() =>
      expect(getByText('Nie można pobrać tytułów artykułów.')).toBeInDocument())
    expect(queryByTestId('autosuggest')).toBeNull()
  })

  it('should handle input change', async () => {
    contentfulClient.getEntries.mockImplementation(() =>
      Promise.resolve({ items: articles })
    )
    const { queryByTestId, container } = renderComponent(sdk)
    await (() => expect(queryByTestId('autosuggest')).not.toBeNull())

    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: 'Fir' } })
    expect(input.value).toEqual('Fir')
  })

  it('should validate field', async () => {
    contentfulClient.getEntries.mockImplementation(() =>
      Promise.resolve({ items: articles })
    )
    const { queryByTestId, container } = renderComponent(sdk)
    await (() => expect(queryByTestId('autosuggest')).not.toBeNull())

    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: 'Fir' } })
    fireEvent.change(input, { target: { value: 'First' } })
    fireEvent.change(input, { target: { value: 'Firs' } })
    expect(sdk.field.setInvalid).toHaveBeenNthCalledWith(1, true)
    expect(sdk.field.setInvalid).toHaveBeenNthCalledWith(2, false)
    expect(sdk.field.setInvalid).toHaveBeenNthCalledWith(3, true)
  })

  it('should show autosuggestions', async () => {
    contentfulClient.getEntries.mockImplementation(() =>
      Promise.resolve({ items: articles })
    )
    const { queryByTestId, container } = renderComponent(sdk)
    await (() => expect(queryByTestId('autosuggest')).not.toBeNull())

    const input = container.querySelector('input')
    input.focus()
    fireEvent.change(input, { target: { value: 'Fi' } })
    const getAutosuggestions = () =>
      container.querySelectorAll('.autosuggest__suggestion')
    expect(getAutosuggestions()).toHaveLength(2)
    fireEvent.change(input, { target: { value: 'Fir' } })
    expect(getAutosuggestions()).toHaveLength(1)
  })

  it('should fill input with suggestion on click', async () => {
    contentfulClient.getEntries.mockImplementation(() =>
      Promise.resolve({ items: articles })
    )
    const { queryByTestId, container } = renderComponent(sdk)
    await (() => expect(queryByTestId('autosuggest')).not.toBeNull())

    const input = container.querySelector('input')
    input.focus()
    fireEvent.change(input, { target: { value: 'Fir' } })
    container.querySelectorAll('.autosuggest__suggestion')[0].click()
    expect(input.value).toEqual('First')
  })

  it('should set sdk value', async () => {
    contentfulClient.getEntries.mockImplementation(() =>
      Promise.resolve({ items: articles })
    )
    const { queryByTestId, container } = renderComponent(sdk)
    await (() => expect(queryByTestId('autosuggest')).not.toBeNull())

    const input = container.querySelector('input')
    input.focus()
    fireEvent.change(input, { target: { value: 'Fir' } })
    container.querySelectorAll('.autosuggest__suggestion')[0].click()
    expect(sdk.field.removeValue).not.toHaveBeenCalled()
    expect(sdk.field.setValue).toHaveBeenCalledWith('first')
    fireEvent.change(input, { target: { value: '' } })
    expect(sdk.field.removeValue).toHaveBeenCalled()
  })
})
