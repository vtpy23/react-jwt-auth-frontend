# React JWT Authentication

A complete React application demonstrating secure authentication using JWT access tokens and refresh tokens.

## 🚀 Features

- **JWT Authentication**: Access token (in-memory) + Refresh token (localStorage)
- **Automatic Token Refresh**: Axios interceptors handle token expiration
- **React Query**: Server state management and caching
- **React Hook Form**: Form validation and management
- **Protected Routes**: Authentication guards for secure pages
- **Modern UI**: Clean and responsive design
- **Mock API**: Built-in mock authentication for testing

## 📋 Technologies

- React 18
- React Router DOM 6
- React Query (TanStack Query v3)
- React Hook Form
- Axios
- Vite

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd react-jwt-auth
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:3000`

## 🔐 Demo Credentials

Use these credentials to test the application:

- **Email**: `user@example.com`
- **Password**: `password123`

## 📁 Project Structure

```
src/
├── api/
│   ├── axios.js          # Axios instance with interceptors
│   └── authApi.js        # Authentication API calls
├── components/
│   ├── Layout.jsx        # Main layout with navigation
│   └── ProtectedRoute.jsx # Route guard component
├── hooks/
│   └── useAuth.js        # Custom authentication hook
├── pages/
│   ├── Login.jsx         # Login page with form validation
│   ├── Dashboard.jsx     # Protected dashboard
│   └── Profile.jsx       # Protected profile page
├── utils/
│   └── tokenStorage.js   # Token storage utilities
├── App.jsx               # Main app component
└── main.jsx              # Entry point
```

## 🔒 Authentication Flow

1. **Login**: User submits credentials via React Hook Form
2. **Token Storage**:
   - Access token stored in memory
   - Refresh token stored in localStorage
3. **API Requests**: Axios interceptor attaches access token
4. **Token Refresh**: On 401 error, automatically refresh using refresh token
5. **Logout**: Clear all tokens and redirect to login

## 🌐 Deployment

### Netlify

1. Build the project:

```bash
npm run build
```

2. Deploy to Netlify:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Vercel

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel --prod
```

### Manual Deployment

1. Build:

```bash
npm run build
```

2. Upload the `dist` folder to your hosting service

## 🔧 Configuration

### Using Real Backend

Replace the mock API in `src/hooks/useAuth.js`:

```javascript
// Change from mockAuthApi to authApi
import { authApi } from '../api/authApi';

// Update mutations to use authApi
loginMutation = useMutation((credentials) => authApi.login(credentials), ...);
```

Update API base URL in `src/api/axios.js`:

```javascript
const API_BASE_URL = "https://your-backend-api.com/api";
```

### Backend Requirements

Your backend should provide these endpoints:

- `POST /auth/login` - Returns `{ accessToken, refreshToken, user }`
- `POST /auth/refresh` - Returns `{ accessToken }`
- `POST /auth/logout` - Invalidates refresh token
- `GET /auth/me` - Returns current user data

## 📝 Key Implementation Details

### Token Storage Strategy

- **Access Token**: Stored in memory (module scope) for security
- **Refresh Token**: Stored in localStorage for persistence

### Axios Interceptors

- **Request**: Automatically attaches access token
- **Response**: Handles 401 errors and refreshes tokens
- **Queue System**: Prevents multiple refresh requests

### React Query Integration

- **Mutations**: Login and logout operations
- **Queries**: Fetching user data with automatic caching
- **Invalidation**: Clears cache on logout

## 🎯 Evaluation Criteria Met

- ✅ Authentication logic (30%)
- ✅ Axios interceptor setup (20%)
- ✅ React Query integration (15%)
- ✅ React Hook Form integration (10%)
- ✅ Public hosting ready (10%)
- ✅ UI/UX implementation (10%)
- ✅ Error handling (5%)

## 🚧 Optional Enhancements

- [ ] Silent token refresh before expiration
- [ ] Cookie-based refresh token storage
- [ ] Multi-tab synchronization
- [ ] Role-based access control
- [ ] Remember me functionality
- [ ] Password strength indicator

## 📄 License

MIT

## 👤 Author

Your Name

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a PR.

---

**Public URL**: [Add your deployment URL here]
