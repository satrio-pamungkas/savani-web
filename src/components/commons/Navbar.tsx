import { NavItemType } from "../../types";

const navbarItems: NavItemType[] = [
    { 
        id: 1, 
        link: './buat.html', 
        text: 'Buat Informasi' 
    },
    { 
        id: 2, 
        link: './pencarian.html', 
        text: 'Cari Informasi' 
    },
    { 
        id: 3, 
        link: './penangkaran.html', 
        text: 'Penangkaran' },
    { 
        id: 4, 
        link: './index.html#tentang', 
        text: 'Tentang'
    }
];

export const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-light navbar-expand-lg py-3" id="navbar-savani">
            <div className="container">
                <a className="navbar-brand text-white" href="./index.html">
                    <img src="assets/img/Logo.svg" width="140px" />
                </a>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon btn-close-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav me-auto">
                        {navbarItems.map((item) => (
                            <li className="nav-item">
                                <a className="nav-link text-white font-16" href={item.link}>{item.text}</a>
                            </li> 
                        ))}
                    </ul>
                    <span className="navbar-text actions">
                        <a href="./login.html" className="btn btn-primary text-white font-16 solid fw-bold py-2 px-4 button-action">
                            Masuk
                        </a>
                    </span>
                </div>
            </div>
        </nav>
    );
}