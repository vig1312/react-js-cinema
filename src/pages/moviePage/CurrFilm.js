import { useParams } from 'react-router-dom';

import { datas } from '../../data/constants';

const CurrFilm = () => {
  const { id } = useParams();
  const currentfillm = datas.find((item) => item.id === Number(id));
  const currentFilmKeys = Object.entries(currentfillm)
  console.log(currentFilmKeys);
  const table = 
    <table className="table">
      {currentFilmKeys.slice(3).map((item, index) => {
        return (
          <tr key={index}>
            <th className="align-right">{item[0]} :</th>
            <td>{item[1]}</td>
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

//             if (item === "trailer" || item === "id" || item === "cover") return null
            
//             return (
//                 <tr key={index}>
//                     <th className="align-right">{item} :</th>
//                     <td>{currentfillm[item]}</td>
//                 </tr>
//             )