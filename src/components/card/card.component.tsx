import "./card.styles.css";
import { Monster } from "../../App";

type CardProps = {
    monster: Monster;
};

const Card = ({ monster }: CardProps) => {
    const { id, name, email } = monster;

    return (
        <div className="card">
            <img
                src={`https://robohash.org/${id}?set=set2`}
                alt={`Monster ${name}`}
            />
            <div className="text-box">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
