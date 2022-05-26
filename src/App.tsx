import { Route, Routes } from "react-router-dom";
import { Beranda } from "./pages/Beranda";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Beranda/>} />
        </Routes>
    );
};
