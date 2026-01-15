
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders wechat chat demo title', () => {
  render(<App />);
  const titleElement = screen.getByText('微信聊天 Demo');
  expect(titleElement).toBeInTheDocument();
});
