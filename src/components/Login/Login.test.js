import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '.';

test('renders login form correctly', () => {
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );
    
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Sign In' });
  
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
});

test('submits login form with valid credentials', () => {
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Sign In' });

    fireEvent.change(emailInput, { target: { value: 'fayezshahid167@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Fayez@2002' } });
    fireEvent.click(loginButton);

    // Add assertions for the expected behavior after form submission
});

// test('displays error message on invalid login', async () => {
//     await act(async () => {
//         render(
//           <MemoryRouter>
//             <Login />
//           </MemoryRouter>
//         );
//       });

//     const emailInput = screen.getByPlaceholderText('Email');
//     const passwordInput = screen.getByPlaceholderText('Password');
//     const loginButton = screen.getByRole('button', { name: 'Sign In' });

//     act(() => {
//         fireEvent.change(emailInput, { target: { value: 'invaliduser@example.com' } });
//         fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });
//         fireEvent.click(loginButton);
//     });

//     await waitFor(() => {
//         expect(screen.getByTestId("login-error")).toBeInTheDocument();
//     });
// });

