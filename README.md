# Crypto Exchange App

This project is a web-based dashboard for a cryptocurrency exchange platform, built using Next.js. It provides visualizations of cryptocurrency data, including candlestick charts and order books for various cryptocurrencies.

## Features

- **Dynamic Cryptocurrency Selection**: Users can select different cryptocurrencies from a dropdown menu to view their respective candlestick chart and order book data.
- **Real-Time Order Book**: Incorporates real-time data to dynamically display order book statuses using WebSocket.

## Technologies Used

Asides from React and Next.js, there are several notable libraries that are being used:

- **Tailwind CSS & shadcn/ui**: A utility-first CSS framework and accessible components library as one of the quickest ways to use a design system.
- **lightweight-charts**: A lightweight and feature rich charts library, that is used to display the candlestick chart in this application.

## Running the application

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Sidenote

If the data from the Order Book section is not showing, a VPN connection might be needed to successfully access the API used with the WebSocket.

## Screenshots

[Desktop](https://github.com/user-attachments/assets/b4dde0d8-f9cb-4297-9023-a2e467b28853)

[Mobile](https://github.com/user-attachments/assets/0f55468c-58ad-41b0-98b3-a8775d0014fd)
