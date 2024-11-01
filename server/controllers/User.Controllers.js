import User from '../models/User.schema.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { nombre, password } = req.body;
    try {
        const user = await User.findOne({ nombre });
        if (!user) return res.status(404).json({ message: 'User not found' });
        if (user.password !== password) return res.status(401).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Login successful',
            token,
            user: { nombre: user.nombre }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const logout = (req, res) => {
    try {
        res.status(200).json({ message: 'Cerrar sesión exitosa' });
    } catch (error) {
        console.error("error al cerrar sesion", error);
        res.status(500).json({ message: 'error al intentar cerrar sesion' });
    }
};

//routes