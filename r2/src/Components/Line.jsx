import { useContext } from "react";
import AnimalsContext from "./AnimalsContext";

function Line({ data }) {

    const {animalsTypes, setDeleteData, setModalData} = useContext(AnimalsContext);

    const doEdit = () => {
        setModalData({...data});
    }


    return (
        <li className="list-group-item">
            <div className="line">
                <div className="line__content">
                <span className="line__content__title">
                    {animalsTypes.find(a => a.id == data.type).type}
                </span>
                <span className="line__content__w">
                    {data.weight} KG
                </span>
                </div>
                <div className="line__buttons">
                <button type="button" onClick={doEdit} className="btn btn-outline-success m-2">Edit</button>
                <button type="button" onClick={() => setDeleteData(data.id)} className="btn btn-outline-danger m-2">Delete</button>
                </div>
            </div>
        </li>
    )


}

export default Line;