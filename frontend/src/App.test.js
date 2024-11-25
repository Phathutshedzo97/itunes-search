import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

// Mock the axios.get function to return a sample response
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
}));

test('renders iTunes Search App title', () => {
  render(<App />);
  const titleElement = screen.getByText(/iTunes Search App/i);
  expect(titleElement).toBeInTheDocument();

  // Create a snapshot of the rendered component
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test('search button triggers search and renders results', async () => {
  // Mock the axios.get function to return a sample response
  const mockResponse = {
    data: [
      { trackId: 1, trackName: 'Track 1' },
      { trackId: 2, trackName: 'Track 2' },
    ],
  };
  axios.get.mockResolvedValue(mockResponse);

  // Render the component
  render(<App />);

  // Enter search term and select media type
  const searchInput = screen.getByPlaceholderText('Enter search term');
  fireEvent.change(searchInput, { target: { value: 'Test' } });

  const mediaTypeSelect = screen.getByRole('combobox');
  fireEvent.change(mediaTypeSelect, { target: { value: 'music' } });

  // Click the search button
  const searchButton = screen.getByText('Search');
  fireEvent.click(searchButton);

  // Wait for the search results to be rendered
  await waitFor(() => {
    const result1 = screen.getByText('Track 1');
    const result2 = screen.getByText('Track 2');
    expect(result1).toBeInTheDocument();
    expect(result2).toBeInTheDocument();
  });
});
