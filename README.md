# Risk Monitoring System Frontend

This is the frontend for the Risk Monitoring System, built with Next.js. It provides an interactive UI for viewing client positions, market data, and real-time risk metrics. The frontend fetches data from the backend via REST APIs and listens for real-time updates through WebSockets.

## Overview

This application is a risk monitoring system built with the following architecture:

- **Frontend**: Next.js
- **Backend**: FastAPI
- **Real-time Updates**: WebSockets
- **Data Provider**: Twelve Data API for financial data

The system is designed to provide real-time updates and insights based on market data. It retrieves data from the Twelve Data API and pushes updates to the frontend through WebSockets.

## Architecture

### Frontend (Next.js)

The frontend is built using **Next.js**, a React framework that enables server-side rendering, static site generation, and easy routing. The frontend interacts with the backend through API endpoints and subscribes to WebSocket connections for real-time data updates.

**Key Features**:

- Fetching and displaying market data via RESTful APIs
- Real-time updates via WebSocket connections
- Responsive and user-friendly interface

### Backend (FastAPI)

The backend is built using **FastAPI**, a modern web framework for Python that allows for fast API development with automatic validation and asynchronous support. The backend is responsible for:

- Interfacing with the Twelve Data API to retrieve market data
- Providing endpoints to fetch historical and real-time market data
- Establishing WebSocket connections for real-time updates to the frontend

**Key Features**:

- REST API for data retrieval
- WebSocket implementation for real-time updates
- Integration with Twelve Data API for market data

### Real-time Data Updates (WebSockets)

To provide real-time updates, the backend uses **WebSockets**. The frontend listens to the WebSocket connection to get live data feeds and updates the UI dynamically.

### Data Retrieval (Twelve Data API)

The system retrieves financial data from the **Twelve Data API**, which offers real-time and historical stock market data. The API is used to fetch market data for display and analysis.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Option 1: Using npm

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Option 2: Using Docker

1. **Build and Start the Application**  
   Run the following command to build and start the application using Docker:

   ```bash
   docker-compose up --build
   ```

2. **Access the Application**  
   Once the application is running, open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Accessing the Dashboard

1. **Start the Application**  
   Follow the steps above to start the application using either npm or Docker.

2. **Create a client using backend API**  
   Visit [https://github.com/gwynethguo/risk-monitoring-backend](https://github.com/gwynethguo/risk-monitoring-backend) for more information on how to access the APIs and the API docs.

3. **Navigate to the Dashboard**  
   Open your browser and go to:

   ```
   http://localhost:3000/dashboard/:client_id
   ```
