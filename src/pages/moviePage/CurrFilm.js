import { useParams } from "react-router-dom";
import {datas} from "../../data/data";


const CurrFilm = () => {
        const {id} = useParams();
        const currentfillm = datas.find((item) => item.id === Number(id));
        const currFilmKeys = Object.keys(currentfillm)
        const table = 
            <table className="table">
            
                {currFilmKeys.map((item,index) => {

                    if(item === "trailer" || item === "id" || item === "cover") return null
                   
                    return (
                        <tr key={index}>
                            <th className="align-right">{item} :</th>
                            <td>{currentfillm[item]}</td>
                        </tr>
                    )
                })}
            </table>
        return (
            <>
                <div className="film-info">
                    <img className="curr-img" src={currentfillm.cover} />
                    {table}
                </div>
                <iframe width="560" height="315" src={currentfillm.trailer} ></iframe>
            </>
        )
    }
    export default CurrFilm;
    
//     <tr>
//     <th className="align-right">name :</th>
//     <td >{currentfillm.title}</td>
// </tr>
// <tr>
//     <th className="align-right">genre :</th>
//     <td>{currentfillm.genre}</td>
// </tr>
// <tr>
//     <th className="align-right">country :</th>
//     <td>{currentfillm.country}</td>
// </tr>
// <tr>
//     <th className="align-right">director :</th>
//     <td>{currentfillm.director}</td>
// </tr>
// <tr>
//     <th className="align-right">year :</th>
//     <td>{currentfillm.year}</td>
// </tr>
// <tr>
//     <th className="align-right">rating :</th>
//     <td>{currentfillm.rating}</td>
// </tr>
