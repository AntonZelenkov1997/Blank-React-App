import './MainButton.scss'
import {FC} from "react";

type MainButtonTypes = {
    title: String
}

const MainButton: FC<MainButtonTypes> = ({ title }) => {
    return (
        <button styleName="buttonTest">{title}</button>
    )
}

export default MainButton