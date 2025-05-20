🌐 Google OAuth Login App with Express.js
This project demonstrates how to implement Google OAuth 2.0 login in an Express.js backend using Passport.js, MongoDB, and Mongoose. Users can log in using their Google accounts, and their basic profile information is stored in the database.

📁 Project Structure

google-oauth-app/
├── config/
│   └── passport.js        # Google OAuth strategy setup
├── models/
│   └── User.js            # Mongoose user model
├── .env                   # Environment variables (Google credentials, Mongo URI)
├── server.js              # Express server entry point
├── package.json

🚀 Features
🔐 Google OAuth 2.0 authentication

✅ User session handling with express-session

🧠 User data stored in MongoDB

🔁 Passport.js integration

🔧 Modular and clean architecture

⚙️ Technologies Used
1. Express.js
2. MongoDB
3. Mongoose
4. Passport.js
5. Google OAuth 2.0 Strategy
6. dotenv

📦 Installation
git clone https://github.com/M-Aitisam/google-oauth-app.git
cd google-oauth-app
npm install


📝 Setup
.) Google Developer Console Setup:
.) Go to Google Cloud Console
.) Create a new project
.) Enable "Google+ API" or "Google Identity Services API"
.) Go to Credentials → Create OAuth 2.0 Client ID
.) Set the following Authorized redirect URI:

http://localhost:5000/auth/google/callback

2. Create a .env file in the root:

MONGO_URI=mongodb://localhost:27017/google_oauth_demo
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret


🧪 Test the App
Login: GET /auth/google → redirects to Google login

Callback: GET /auth/google/callback → Google redirects back

Logout: GET /logout

👤 User Model Example
{
  googleId: "google-oauth-id",
  displayName: "John Doe",
  email: "johndoe@gmail.com"
}

📚 Concepts Covered
Google OAuth 2.0 integration

Passport strategies

User sessions with express-session

MongoDB persistence

💡 Future Improvements
Frontend integration (React or other)

Add user dashboard

Token-based authentication

Refresh tokens and logout redirect

📄 License
This project is licensed under the MIT License.

