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
        {dataFilter.map((disciplina) => {
          return (
            <tr key={disciplina.id}>
              <td> {disciplina.name}</td>
              <td>{disciplina.cantAlumnos}</td>
              <td>{disciplina.promedioDeNotas}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
