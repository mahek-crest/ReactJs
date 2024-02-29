import { render, screen } from '@testing-library/react';
import App from './App';
import Greeting from './components/Greeting';
import userEvent from '@testing-library/user-event';

describe('<Greeting/>', () => {
  test('renders hello world as a text', () => {
    //arrange 
    render(<Greeting />)

    //act 
    //..nothing fo now

    //assert 
    const helloWroldElement = screen.getByText('Hello', { exact: false })
    expect(helloWroldElement).toBeInTheDocument();
  })
})


describe('<App/>', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
})


test('render - button not clicked ', () => {
  render(<Greeting />)
  const paragraghText = screen.getByText(/good to see you/i, { exact: false });
  expect(paragraghText).toBeInTheDocument();
})

test('render - button clicked ', () => {

  //ARRANGE 
  render(<Greeting />)

  // ACT
  const buttonEle = screen.getByRole('button')
  userEvent.click(buttonEle)

  // ASSERT
  const outputElement = screen.getByText('Change text', { exact: false })

})