import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<p>Pagina Inicial</p>} />
        </Routes>
    );
};
