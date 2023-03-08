import React from "react";
import "./styles.css";

const Table = ({ dataFilter }) => {


  return (
    <table border="1" className="line_title">
      <thead>
        <tr>
          <th>Disciplina</th>
          <th>Cantidad de Alumnos</th>
          <th>Promedio de calificaciones</th>
        </tr>
      </thead>
      <tbody>
        {dataFilter.map((element) => {
          return (
            <tr key={element.id}>
              <td> {element.name}</td>
              <td>{element.cantAlumnos}</td>
              <td>{element.promedioDeNotas}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
