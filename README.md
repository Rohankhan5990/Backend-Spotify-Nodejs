# 🎵 Spotify Backend API

A robust Node.js backend API that integrates with Spotify Web API to fetch artist information and manage user registration data. This application provides endpoints for Spotify artist data retrieval and comprehensive user management functionality.

## 🚀 Features

- **Spotify Integration**: Fetch artist information using Spotify Web API
- **User Management**: Complete user registration and profile management system
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **RESTful API**: Clean and organized API endpoints
- **CORS Support**: Cross-origin resource sharing enabled
- **Environment Configuration**: Secure configuration management with dotenv

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **HTTP Client**: Axios
- **Environment Management**: dotenv
- **Development**: Nodemon for auto-restart
- **Authentication**: Spotify Client Credentials Flow

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB instance (local or cloud)
- Spotify Developer Account
- Git

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/backend-spotify-app.git
   cd backend-spotify-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `config` directory:
   ```bash
   mkdir config
   touch config/.env
   ```
   
   Add the following environment variables:
   ```env
   # Database Configuration
   DATABASE=mongodb://localhost:27017/spotify-app
   # or for MongoDB Atlas:
   # DATABASE=mongodb+srv://username:password@cluster.mongodb.net/spotify-app
   
   # Spotify API Configuration
   CLIENT_ID=your_spotify_client_id
   CLIENT_SECRET=your_spotify_client_secret
   SPOTIFY_TOKEN_URL=https://accounts.spotify.com/api/token
   SPOTIFY_API_BASE_URL=https://api.spotify.com/v1
   ```

4. **Get Spotify API Credentials**
   - Visit [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Create a new app
   - Copy your Client ID and Client Secret
   - Add them to your `.env` file

## 🚀 Usage

1. **Start the development server**
   ```bash
   npm start
   ```
   
   The server will start on `http://localhost:3000`

2. **Verify the installation**
   ```bash
   curl http://localhost:3000
   ```
   
   You should receive: `{"data": "hello"}`

## 📚 API Endpoints

### Spotify Routes (`/api/spotify`)

#### Get Artist Information
- **POST** `/api/spotify/artist`
- **Description**: Fetch artist data from Spotify using artist URL
- **Body**:
  ```json
  {
    "artistUrl": "https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw"
  }
  ```
- **Response**: Spotify artist object with name, genres, popularity, followers, etc.

### User Management Routes (`/api/users`)

#### Initialize Registration
- **POST** `/api/users/init`
- **Description**: Start user registration process

#### Update Account Role
- **PUT** `/api/users/role`
- **Description**: Update user's account role (manager, client, employee)

#### Update Country
- **PUT** `/api/users/country`
- **Description**: Update user's country information

#### Update Address
- **PUT** `/api/users/address`
- **Description**: Update user's address

#### Manual Address Update
- **PUT** `/api/users/manualAddress`
- **Description**: Manually update detailed address information

#### Update Hear About Source
- **PUT** `/api/users/hearAbout`
- **Description**: Update how user heard about the service

#### Update Artist Name
- **PUT** `/api/users/artistName`
- **Description**: Update artist name for artist accounts

#### Update Spotify URL
- **PUT** `/api/users/spotifyUrl`
- **Description**: Update user's Spotify profile URL

## 🗂️ Project Structure

```
├── config/
│   └── connection.js          # Database connection configuration
├── controllers/
│   ├── spotify_controller.js  # Spotify API related logic
│   └── user_controller.js     # User management logic
├── middleware/
│   └── spotify_token.js       # Spotify token middleware
├── models/
│   └── user_register.js       # User registration schema
├── routes/
│   └── user_routes.js         # API route definitions
├── services/
│   └── spotify_services.js    # Spotify service layer
├── index.js                   # Application entry point
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🔧 Configuration

### Database Schema

The application uses MongoDB with the following main schema:

```javascript
{
  userId: ObjectId,
  accountRole: String (enum: ["manager", "client", "employee"]),
  country: String,
  address: String,
  manAddress: {
    address: String,
    address1: String,
    town: String,
    country: String,
    postalCode: String
  },
  hearAbout: String,
  artistName: String,
  spotifyUrl: String
}
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE` | MongoDB connection string | ✅ |
| `CLIENT_ID` | Spotify App Client ID | ✅ |
| `CLIENT_SECRET` | Spotify App Client Secret | ✅ |
| `SPOTIFY_TOKEN_URL` | Spotify token endpoint | ✅ |
| `SPOTIFY_API_BASE_URL` | Spotify API base URL | ✅ |

## 🧪 Testing

Currently, no tests are configured. To add testing:

1. Install testing framework:
   ```bash
   npm install --save-dev jest supertest
   ```

2. Update `package.json`:
   ```json
   {
     "scripts": {
       "test": "jest",
       "test:watch": "jest --watch"
     }
   }
   ```

## 🚀 Deployment

### Using PM2 (Production)

1. Install PM2 globally:
   ```bash
   npm install -g pm2
   ```

2. Start the application:
   ```bash
   pm2 start index.js --name "spotify-backend"
   ```

### Using Docker

1. Create `Dockerfile`:
   ```dockerfile
   FROM node:16
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. Build and run:
   ```bash
   docker build -t spotify-backend .
   docker run -p 3000:3000 spotify-backend
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you encounter any issues, please [create an issue](https://github.com/yourusername/backend-spotify-app/issues) on GitHub.

## 📞 Support

For support, email your-email@example.com or create an issue on GitHub.

## 🙏 Acknowledgments

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/) for providing the music data
- [Express.js](https://expressjs.com/) for the web framework
- [MongoDB](https://www.mongodb.com/) for the database solution

---

⭐ If you found this project helpful, please give it a star on GitHub!