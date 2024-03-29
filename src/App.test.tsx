import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Ethers Conversion Tool', () => {
  it('should display conversions panel and all inputs on show', () => {
    render(<App />);
    const showPanelButton = screen.getByText(/show panel/i);
    expect(screen.queryByLabelText(/^wei$/)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/kwei/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/mwei/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/gwei/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/microether/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/milliether/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/^ether$/)).not.toBeInTheDocument();
    fireEvent.click(showPanelButton);
    expect(screen.getByLabelText(/^wei$/)).toBeInTheDocument();
    expect(screen.getByLabelText(/kwei/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mwei/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/gwei/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/microether/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/milliether/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^ether$/)).toBeInTheDocument();
  });
  it('should not display conversions panel on hide', () => {
    render(<App />);
    const showPanelButton = screen.getByText(/show panel/i);
    fireEvent.click(showPanelButton);
    const hidePanelButton = screen.getByText(/hide panel/i);
    expect(hidePanelButton).toBeInTheDocument();
    fireEvent.click(hidePanelButton);
    expect(screen.queryByLabelText(/^wei$/)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/kwei/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/mwei/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/gwei/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/microether/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/milliether/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/^ether$/)).not.toBeInTheDocument();
  });
  it('should have default values upon opening conversions table', () => {
    render(<App />);
    const showPanelButton = screen.getByText(/show panel/i);
    fireEvent.click(showPanelButton);
    expect(screen.queryByLabelText(/^wei$/)).toHaveValue(1000000000);
    expect(screen.queryByLabelText(/kwei/i)).toHaveValue(1000000);
    expect(screen.queryByLabelText(/mwei/i)).toHaveValue(1000);
    expect(screen.queryByLabelText(/gwei/i)).toHaveValue(1);
    expect(screen.queryByLabelText(/microether/i)).toHaveValue(0.001);
    expect(screen.queryByLabelText(/milliether/i)).toHaveValue(0.000001);
    expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0.000000001);
  });
  it('should dynamically calculate denominations on user input', () => {
    render(<App />);
    const showPanelButton = screen.getByText(/show panel/i);
    fireEvent.click(showPanelButton);
    const gwei = screen.getByLabelText(/gwei/i);
    userEvent.type(gwei, '{backspace}10');
    expect(screen.queryByLabelText(/^wei$/)).toHaveValue(10000000000);
    expect(screen.queryByLabelText(/kwei/i)).toHaveValue(10000000);
    expect(screen.queryByLabelText(/mwei/i)).toHaveValue(10000);
    expect(screen.queryByLabelText(/gwei/i)).toHaveValue(10);
    expect(screen.queryByLabelText(/microether/i)).toHaveValue(0.01);
    expect(screen.queryByLabelText(/milliether/i)).toHaveValue(0.00001);
    expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0.00000001);
    userEvent.type(gwei, '0');
    expect(screen.queryByLabelText(/^wei$/)).toHaveValue(100000000000);
    expect(screen.queryByLabelText(/kwei/i)).toHaveValue(100000000);
    expect(screen.queryByLabelText(/mwei/i)).toHaveValue(100000);
    expect(screen.queryByLabelText(/gwei/i)).toHaveValue(100);
    expect(screen.queryByLabelText(/microether/i)).toHaveValue(0.1);
    expect(screen.queryByLabelText(/milliether/i)).toHaveValue(0.0001);
    expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0.0000001);
    userEvent.type(gwei, '0');
    expect(screen.queryByLabelText(/^wei$/)).toHaveValue(1000000000000);
    expect(screen.queryByLabelText(/kwei/i)).toHaveValue(1000000000);
    expect(screen.queryByLabelText(/mwei/i)).toHaveValue(1000000);
    expect(screen.queryByLabelText(/gwei/i)).toHaveValue(1000);
    expect(screen.queryByLabelText(/microether/i)).toHaveValue(1);
    expect(screen.queryByLabelText(/milliether/i)).toHaveValue(0.001);
    expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0.000001);
    userEvent.type(gwei, '0');
    expect(screen.queryByLabelText(/^wei$/)).toHaveValue(10000000000000);
    expect(screen.queryByLabelText(/kwei/i)).toHaveValue(10000000000);
    expect(screen.queryByLabelText(/mwei/i)).toHaveValue(10000000);
    expect(screen.queryByLabelText(/gwei/i)).toHaveValue(10000);
    expect(screen.queryByLabelText(/microether/i)).toHaveValue(10);
    expect(screen.queryByLabelText(/milliether/i)).toHaveValue(0.01);
    expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0.00001);
    userEvent.type(gwei, '0');
    expect(screen.queryByLabelText(/^wei$/)).toHaveValue(100000000000000);
    expect(screen.queryByLabelText(/kwei/i)).toHaveValue(100000000000);
    expect(screen.queryByLabelText(/mwei/i)).toHaveValue(100000000);
    expect(screen.queryByLabelText(/gwei/i)).toHaveValue(100000);
    expect(screen.queryByLabelText(/microether/i)).toHaveValue(100);
    expect(screen.queryByLabelText(/milliether/i)).toHaveValue(0.1);
    expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0.0001);
    userEvent.type(gwei, '0');
    expect(screen.queryByLabelText(/^wei$/)).toHaveValue(1000000000000000);
    expect(screen.queryByLabelText(/kwei/i)).toHaveValue(1000000000000);
    expect(screen.queryByLabelText(/mwei/i)).toHaveValue(1000000000);
    expect(screen.queryByLabelText(/gwei/i)).toHaveValue(1000000);
    expect(screen.queryByLabelText(/microether/i)).toHaveValue(1000);
    expect(screen.queryByLabelText(/milliether/i)).toHaveValue(1);
    expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0.001);
  });
});

it('should dynamically calculate denominations on user input other than gwei', () => {
  render(<App />);
  const showPanelButton = screen.getByText(/show panel/i);
  fireEvent.click(showPanelButton);
  const wei = screen.getByLabelText(/^wei$/);
  const gwei = screen.getByLabelText(/gwei/i);
  const kwei = screen.getByLabelText(/kwei/i);
  const mwei = screen.getByLabelText(/mwei/i);
  const microether = screen.getByLabelText(/microether/i);
  const milliether = screen.getByLabelText(/milliether/i);
  const ether = screen.getByLabelText(/^ether$/);
  userEvent.type(gwei, '{backspace}10');
  expect(screen.queryByLabelText(/^wei$/)).toHaveValue(10000000000);
  expect(screen.queryByLabelText(/kwei/i)).toHaveValue(10000000);
  expect(screen.queryByLabelText(/mwei/i)).toHaveValue(10000);
  expect(screen.queryByLabelText(/gwei/i)).toHaveValue(10);
  expect(screen.queryByLabelText(/microether/i)).toHaveValue(0.01);
  expect(screen.queryByLabelText(/milliether/i)).toHaveValue(0.00001);
  expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0.00000001);
  userEvent.type(kwei, '0');
  expect(screen.queryByLabelText(/^wei$/)).toHaveValue(100000000000);
  expect(screen.queryByLabelText(/kwei/i)).toHaveValue(100000000);
  expect(screen.queryByLabelText(/mwei/i)).toHaveValue(100000);
  expect(screen.queryByLabelText(/gwei/i)).toHaveValue(100);
  expect(screen.queryByLabelText(/microether/i)).toHaveValue(0.1);
  expect(screen.queryByLabelText(/milliether/i)).toHaveValue(0.0001);
  expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0.0000001);
  userEvent.type(mwei, '0');
  expect(screen.queryByLabelText(/^wei$/)).toHaveValue(1000000000000);
  expect(screen.queryByLabelText(/kwei/i)).toHaveValue(1000000000);
  expect(screen.queryByLabelText(/mwei/i)).toHaveValue(1000000);
  expect(screen.queryByLabelText(/gwei/i)).toHaveValue(1000);
  expect(screen.queryByLabelText(/microether/i)).toHaveValue(1);
  expect(screen.queryByLabelText(/milliether/i)).toHaveValue(0.001);
  expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0.000001);
  userEvent.type(microether, '0');
  expect(screen.queryByLabelText(/^wei$/)).toHaveValue(10000000000000);
  expect(screen.queryByLabelText(/kwei/i)).toHaveValue(10000000000);
  expect(screen.queryByLabelText(/mwei/i)).toHaveValue(10000000);
  expect(screen.queryByLabelText(/gwei/i)).toHaveValue(10000);
  expect(screen.queryByLabelText(/microether/i)).toHaveValue(10);
  expect(screen.queryByLabelText(/milliether/i)).toHaveValue(0.01);
  expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0.00001);
  userEvent.type(milliether, '0');
  expect(screen.queryByLabelText(/^wei$/)).toHaveValue(0);
  expect(screen.queryByLabelText(/kwei/i)).toHaveValue(0);
  expect(screen.queryByLabelText(/mwei/i)).toHaveValue(0);
  expect(screen.queryByLabelText(/gwei/i)).toHaveValue(0);
  expect(screen.queryByLabelText(/microether/i)).toHaveValue(0);
  expect(screen.queryByLabelText(/milliether/i)).toHaveValue(null);
  expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0);
  userEvent.type(wei, '1000000000');
  expect(screen.queryByLabelText(/^wei$/)).toHaveValue(1000000000);
  expect(screen.queryByLabelText(/kwei/i)).toHaveValue(1000000);
  expect(screen.queryByLabelText(/mwei/i)).toHaveValue(1000);
  expect(screen.queryByLabelText(/gwei/i)).toHaveValue(1);
  expect(screen.queryByLabelText(/microether/i)).toHaveValue(0.001);
  expect(screen.queryByLabelText(/milliether/i)).toHaveValue(0.000001);
  expect(screen.queryByLabelText(/^ether$/)).toHaveValue(0.000000001);
});
