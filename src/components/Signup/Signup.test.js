import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from '.';

test('renders signup form correctly', () => {
    render(
        <MemoryRouter>
            <Signup />
        </MemoryRouter>
    );
    
    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const signupButton = screen.getByRole('button', { name: 'Sign Up' });
  
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    // expect(confirmPasswordInput).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
});

// test('submits signup form with valid data', () => {
//     render(
//         <MemoryRouter>
//             <Signup />
//         </MemoryRouter>
//     );
    
//     const firstNameInput = screen.getByPlaceholderText('First Name');
//     const lastNameInput = screen.getByPlaceholderText('Last Name');
//     const emailInput = screen.getByPlaceholderText('Email');
//     const passwordInput = screen.getByPlaceholderText('Password');
//     const signupButton = screen.getByRole('button', { name: 'Sign Up' });

//     fireEvent.change(firstNameInput, { target: { value: 'John' } });
//     fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
//     fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'newpassword' } });
//     // fireEvent.change(confirmPasswordInput, { target: { value: 'newpassword' } });
//     fireEvent.click(signupButton);

//     // Add assertions for the expected behavior after form submission
// });

// test('displays error message on invalid signup', async () => {
//     await act(async () => {
//       render(
//         <MemoryRouter>
//           <Signup />
//         </MemoryRouter>
//       );
//     });
  
//     const firstNameInput = screen.getByPlaceholderText('First Name');
//     const lastNameInput = screen.getByPlaceholderText('Last Name');
//     const emailInput = screen.getByPlaceholderText('Email');
//     const passwordInput = screen.getByPlaceholderText('Password');
//     const signupButton = screen.getByRole('button', { name: 'Sign Up' });
  
//     // Enter valid data
//     act(() => {
//       fireEvent.change(firstNameInput, { target: { value: 'John' } });
//       fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
//       fireEvent.change(emailInput, { target: { value: 'fayezshahid167@gmail.com' } });
//       fireEvent.change(passwordInput, { target: { value: 'Fayez@2002' } });
//       fireEvent.click(signupButton);
//     });
  
//     // Use waitFor instead of direct assertion
//     await waitFor(() => {
//       expect(screen.getByTestId("signup-error")).toBeInTheDocument();
//     });
// });

