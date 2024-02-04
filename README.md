# RealTimeStockExchange Application

## Backend API Guide

### Running the Backend (RealTimeStockExchangeAPI)
1. Press Ctrl+F5 to run the app.

### Authentication
1. **POST /api/Auth/login**
   - In the Swagger browser window, select POST /api/Auth/login, and then click on "Try it out."
   - Enter the following credentials in the Request body:
     ```json
     { "UserName": "egid", "Password": "egid" }
     ```
   - Click "Execute" to get the token.

### Order Operations
2. **POST /API/orders**
   - Select POST /API/orders and click "Try it out."
   - Enter the order details in the Request body:
     ```json
     { "StockSymbol": "string", "OrderType": "string", "Quantity": number }
     ```
   - Click "Execute." The response body should show "Order created successfully."

3. **GET /API/orders**
   - Select GET /API/orders and click "Try it out."
   - Click "Execute." The response body should display a list of ordered items (Stock Symbol, Order Type, Quantity).

### Stock Operations
4. **GET /api/Stock**
   - Select GET /api/Stock and click "Try it out."
   - Click "Execute." The response body should display a list of Stock items (Symbol, Current Price, TimeStamps).

5. **GET /api/Stock/{symbol}/history**
   - Select GET /api/Stock/{symbol}/history and click "Try it out."
   - Enter the symbol in the Parameters section.
   - Click "Execute." The response body should display the history of the specified symbol.

**Note:**
- All live data comes from [IEX Cloud](https://api.iex.cloud/v1/data/).

## Frontend Angular Guide

### Frontend Guidelines (RealTimeStockExchangeUI)
1. Open the project in VS Code and write in the terminal:
   - `npm install`
   - `ng serve -o` to run the project. Open it in [http://localhost:4200/](http://localhost:4200/).

### Pages:

1. **Home Page:**
   - Navigate to [http://localhost:4200/stocks](http://localhost:4200/stocks).
   - Displays a list table of stocks from the API GET /api/Stock.

2. **Add History Page:**
   - Navigate to [http://localhost:4200/stocks](http://localhost:4200/stocks).
   - Enter a symbol in the input and click the "History" button to return the history of the specified symbol using the API GET /api/Stock/{symbol}/history.

3. **Order Page:**
   - Navigate to [http://localhost:4200/add](http://localhost:4200/add).
   - In the input, add a symbol and quantity, then click "Buy" or "Sell" using the API POST /API/orders. Reload the page to display the added order using the API GET /API/orders.


