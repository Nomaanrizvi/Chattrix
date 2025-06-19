
# 💬 Chattrix

**Chattrix** is a real-time chat application built using the MERN stack (React, Node.js, Express) and Socket.IO. It allows users to join chat rooms and communicate instantly with others, offering a smooth and responsive user experience.

---

## 🚀 Features

- 🔒 Join chat rooms with custom names
- 💬 Real-time bi-directional messaging with Socket.IO
- 👥 Displays active users in each chat room
- ⚡ Fast and responsive UI
- 🌐 Built with React for the frontend and Node.js + Express for the backend
- 🔄 Clean separation of frontend and backend for easy scalability

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Tailwind CSS
- Socket.IO Client

**Backend:**
- Node.js
- Express
- Socket.IO

---

## 📁 Project Structure

<pre>
Chattrix/
├── client/             # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.jsx
│       └── main.jsx
├── server/             # Node.js Backend
│   ├── index.js
│   └── users.js
├── package.json
└── README.md
</pre>

---

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Chattrix.git
cd Chattrix
````

### 2. Install Server Dependencies

```bash
cd server
npm install
```

### 3. Install Client Dependencies

```bash
cd ../client
npm install
```

---

## 🧪 Running the Application

### Start Backend Server

```bash
cd server
npm run dev
```

### Start Frontend React App

```bash
cd ../client
npm run dev
```

---


## 🧠 How It Works

* When a user joins, their name and room are passed through query parameters.
* Socket.IO establishes a real-time connection between users and the server.
* Messages are broadcast to all users in the same room.
* The server handles user join/leave events and emits updated user lists.

---

## 🧹 Future Improvements

* ✅ Private messaging
* ✅ Message timestamps
* ✅ Emoji / GIF support
* ✅ Typing indicators
* ✅ Auth system (JWT or OAuth)

---

## 👨‍💻 Author

**Nomaan Rizvi**
📧 [nomanrizvi007@gmail.com](mailto:nomanrizvi007@gmail.com)
🔗 [GitHub](https://github.com/Nomaanrizvi) | [LinkedIn](https://www.linkedin.com/in/nomaanrizvi/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

