# Setup Instructions  

1. Create a `.env` file in the project root and define the required environment variables based on the `.env.example` file.  
2. Run `yarn dev` to start the project in development mode.  

---

# API Usage Details  

### The API is structured into three layers:  

1. **HTTP Requests (located in `./src/services/api`)**  
   - Axios is used as the HTTP client due to its powerful features, such as interceptors and simplified request handling.  
   - In this layer, payloads are formatted as query parameters, request bodies, or form data as needed.  

2. **API Hooks (located in `./src/hooks/api`)**  
   - React Query is used to manage API requests, caching, and data synchronization.  
   - Any modifications to query caches or transformations of data before delivering it to components are handled here.  

3. **Hook Usages in UI Components**  
   - Hooks from the second layer are utilized in UI components to fetch data and manage loading, error, and success states.  
   - The UI is updated dynamically based on the state of the fetched data.  

---

# Assumptions  

Due to the short deadline for this task, some features were implemented using MUI components to streamline development. The primary focus was on delivering a well-structured and clean codebase that meets the main criteria. Some secondary features, such as showing or hiding columns, were efficiently handled using built-in MUI functionalities.  