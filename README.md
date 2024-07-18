# sbs-data-service

The sbs-data-service microservice is responsible for integrating with the Hypixel API to fetch and process SkyBlock data. This README provides an overview of its purpose, functionality, and setup instructions.

## Purpose

sbs-data-service serves as a backend service within the microservices architecture, specifically designed to:

- Fetch SkyBlock data from the Hypixel API.
- Parse, validate, and transform data into usable formats.
- Implement caching mechanisms for optimized data retrieval.

## Features

- **Data Integration**: Integrates seamlessly with the Hypixel API to fetch various SkyBlock statistics and information.
- **Data Parsing**: Processes and validates retrieved data, ensuring consistency and reliability.
- **Caching Strategy**: Implements caching to improve performance by reducing API calls and latency.

## Setup

To set up and run sbs-data-service locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd sbs-data-service
   ```

2. **Install Dependencies**:

3. **Configure Environment Variables**:

   Create a .env file based on .env.example and configure necessary environment variables (e.g., API keys, caching settings).

4. **Run the Service**:

   development:

   ```bash
   npm run dev
   ```

Open your browser or use a tool like Postman to send requests to the service endpoints (e.g., <http://localhost:3000/health>).
