import { Link } from "react-router-dom";
export const Categorias = () => {
    return (
        <ul>
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    <button className="btn btn-dark"><i class="fas fa-home fa-lg"></i></button>
                    
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/procesadores"}>
                    <button className="btn btn-dark"><li class="fas fa-microchip fa-lg"></li></button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/tarjetas-video"}>
                    <button className="btn btn-dark"><li class="fas fa-stream fa-lg"></li></button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/memorias-ram"}>
                    <button className="btn btn-dark"><li class="fas fa-memory fa-lg"></li></button>
                </Link>
            </li>
        </ul>
    );
}
