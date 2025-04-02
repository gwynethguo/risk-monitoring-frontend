export const API_BASE_URL = "http://127.0.0.1:8000/api";

export const API_ENDPOINTS = {
  MARGIN_STATUS: (clientId: string) => `${API_BASE_URL}/margin-status/${clientId}`,
  MARKET_DATA: (clientId: string) => `${API_BASE_URL}/market-data/client/${clientId}`,
};

export const WEBSOCKET_URL = (clientId: string) => `ws://127.0.0.1:8000/ws/${clientId}`;