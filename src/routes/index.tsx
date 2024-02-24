import { Routes, Route, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Button color='secondary' variant='contained'>Teste</Button>} />
        </Routes>
    );
};
