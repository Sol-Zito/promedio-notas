import { useState } from "react";
import Formulario from "./Formulario";
import "./styles.css";

function PromedioAlumDisc() {
  const [data, setData] = useState([
    {
      id: 0,
      name: "Bases de Datos",
      cantAlumnos: 0,
      promedioDeNotas: 0,
      cantNotas: [],
    },
    {
      id: 1,
      name: "Desenvolvimento Backend",
      cantAlumnos: 0,
      promedioDeNotas: 0,
      cantNotas: [],
    },
    {
      id: 2,
      name: "Desenvolvimento Frontend",
      cantAlumnos: 0,
      promedioDeNotas: 0,
      cantNotas: [],
    },
    {
      id: 3,
      name: "Devops",
      cantAlumnos: 0,
      promedioDeNotas: 0,
      cantNotas: [],
    },
  ]);

  let dataFilter = data.filter((e) => e.name !== "Devops");

  const promedioNotas = (cantAlu, arrNotas) => {
    let resultado = 0;
    if (arrNotas.length > 1) {
      console.log("arrNotas", arrNotas);
      let total = arrNotas.reduce((a, b) => a + b);
      console.log(total);
      resultado = total / cantAlu;
    } else {
      resultado = arrNotas[0];
    }
    console.log("resultado del promedio", resultado);
    return resultado;
  };

  const handleClick = (disciplina, nota) => {
    let newNota = parseFloat(nota);
    const nuevoArr = data.map((el) => {
      if (el.name === disciplina) {
        console.log("elemento", el);
        return {
          ...el,
          cantAlumnos: el.cantAlumnos + 1,
          promedioDeNotas: promedioNotas(
            el.cantAlumnos + 1,
            el.cantNotas.concat(newNota)
          ),
          cantNotas: el.cantNotas.concat(newNota),
        };
      } else {
        return el;
      }
    });
    setData([...nuevoArr]);
  };

  return (
    <div className="container">
      <Formulario data={dataFilter} handleClick={handleClick} />
    </div>
  );
}
export default PromedioAlumDisc;
