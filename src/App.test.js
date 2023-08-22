import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './components/form/BookingForm';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

test('Renders the BookingForm heading', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  // render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();


  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = []

})


describe('BookingForm', () => {
  it('should render with correct HTML5 validation attributes', () => {
    const { getByLabelText } = render(<BookingForm />);
    
    const dateInput = getByLabelText('Choose Date:');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required', '');

    const timeSelect = getByLabelText('Choose Time:');
    expect(timeSelect).toHaveAttribute('required', '');

    const guestsInput = getByLabelText('Number of Guests:');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('required', '');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');

    const occasionSelect = getByLabelText('Occasion:');
    expect(occasionSelect).toHaveAttribute('required', '');
  });
  
  // Add more tests as needed


  it('should validate form submission for valid input', () => {
    // Mock necessary functions or props for this test
    const mockSubmitForm = jest.fn();
    const { getByLabelText, getByText } = render(
      <BookingForm submitForm={mockSubmitForm} />
    );

    const dateInput = getByLabelText('Choose Date:');
    const timeSelect = getByLabelText('Choose Time:');
    const guestsInput = getByLabelText('Number of Guests:');
    const occasionSelect = getByLabelText('Occasion:');
    const submitButton = getByText('Make Your Reservation');

    // Simulate user input
    fireEvent.change(dateInput, { target: { value: '2023-08-22' } });
    fireEvent.change(timeSelect, { target: { value: '12:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Assert that the validation functions were called
    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
    // Add more assertions based on your validation logic
  });

  it('should show validation errors for invalid input', () => {
    // Similar to the previous test, but simulate invalid input
    // Assert that error messages are shown
  });
});