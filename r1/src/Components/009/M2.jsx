import { useContext } from "react";
import PirmasisKontekstas, { DarVienasKontekstas } from "../../Contexts/PirmasisKontekstas";

function M2({ kas }) {

    const { pirmas, spalva } = useContext(PirmasisKontekstas);
    const {dar} = useContext(DarVienasKontekstas);

    return <h2 style={{color: spalva}}>{kas} {dar} {pirmas}</h2>
}

export default M2;