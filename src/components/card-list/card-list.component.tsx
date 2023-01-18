import "./card-list.styles.css";
import Card from "../card/card.component";
import { Monster } from "../../App";

type CardListProp = {
    monsters: Monster[];
};

const CardList = ({ monsters }: CardListProp) => {
    return (
        <div className="card-list">
            {monsters.map((monster, index) => (
                <Card key={index} monster={monster} />
            ))}
        </div>
    );
};

export default CardList;
