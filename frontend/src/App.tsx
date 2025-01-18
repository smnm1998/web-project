import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/Auth/SignIn';
import './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>HelloWorld!</h1>} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}