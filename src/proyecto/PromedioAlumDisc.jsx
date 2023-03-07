import { useState } from "react";
import Formulario from "./Formulario";
import Table from "./Table";
import "./styles.css";

function PromedioAlumDisc() {
  const [data, setData] = useState([
    { id: 0, name: "Bases de Datos", cantAlumnos: 0, promedioDeNotas: 0 },
    {
      id: 1,
      name: "Desenvolvimento Backend",
      cantAlumnos: 0,
      promedioDeNotas: 0,
    },
    {
      id: 2,
      name: "Desenvolvimento Frontend",
      cantAlumnos: 0,
      promedioDeNotas: 0,
    },
    { id: 3, name: "Devops", cantAlumnos: 0, promedioDeNotas: 0 },
  ]);

  const handleClick = (disciplina, nota) => {
    const nuevoArr = data.map((el) => {
      if (el.name === disciplina) {
        return {
          ...el,
          cantAlumnos: el.cantAlumnos + 1,
          promedioDeNotas: nota,
        };
      } else {
        return el;
      }
    });
    setData([...nuevoArr]);
  };

  let dataFilter = data.filter((e) => e.name !== "Devops");

  return (
    <div className="container">
      <Formulario data={dataFilter} handleClick={handleClick} />
      <div className="container">
        <Table dataFilter={dataFilter} />
      </div>
    </div>
  );
}
export default PromedioAlumDisc;
