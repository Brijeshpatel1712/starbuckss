const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

const DB_FILE = path.join(__dirname, 'users.json');

// Helper to read users
const readUsers = () => {
    try {
        if (!fs.existsSync(DB_FILE)) {
            return [];
        }
        const data = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading DB:', error);
        return [];
    }
};

// Helper to write users
const writeUsers = (users) => {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error writing DB:', error);
    }
};

// Middleware
app.use(cors());
app.use(express.json());

// Sign in endpoint
app.post('/api/signin', (req, res) => {
    const { username, password, keepSignedIn } = req.body;
    const users = readUsers();

    console.log('Sign in attempt:', {
        username,
        password: '***',
        keepSignedIn,
        timestamp: new Date().toISOString()
    });

    // Store user data
    const user = {
        id: users.length + 1,
        username,
        password, // In production, you should hash passwords!
        keepSignedIn,
        createdAt: new Date().toISOString()
    };

    users.push(user);
    writeUsers(users);

    console.log('User signed in successfully and stored in JSON:', {
        id: user.id,
        username: user.username,
        totalUsers: users.length
    });

    res.status(200).json({
        success: true,
        message: 'Sign in successful',
        user: {
            id: user.id,
            username: user.username
        }
    });
});

// Join (Register) endpoint
app.post('/api/join', (req, res) => {
    const userData = req.body;
    const users = readUsers();

    console.log('Join attempt:', {
        email: userData.email,
        timestamp: new Date().toISOString()
    });

    // Store user data
    const newUser = {
        id: users.length + 1,
        ...userData,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    writeUsers(users);

    console.log('New user joined and stored in JSON:', {
        id: newUser.id,
        email: newUser.email,
        totalUsers: users.length
    });

    res.status(200).json({
        success: true,
        message: 'Account created successfully',
        user: {
            id: newUser.id,
            username: newUser.email, // Using email as username
            firstName: newUser.firstName
        }
    });
});

// Get all users endpoint (for testing)
app.get('/api/users', (req, res) => {
    const users = readUsers();
    res.status(200).json({
        success: true,
        users: users.map(u => ({
            id: u.id,
            username: u.username,
            createdAt: u.createdAt
        }))
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
    console.log('Endpoints:');
    console.log(`  POST http://localhost:${PORT}/api/signin`);
    console.log(`  POST http://localhost:${PORT}/api/join`);
    console.log(`  GET  http://localhost:${PORT}/api/users`);
});
