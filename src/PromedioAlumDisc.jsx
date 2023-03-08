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

  let dataFilter = data.filter((elemento) => elemento.name !== "Devops");

  const promedioNotas = (cantAlumnos, arrNotas) => {
    let resultado = 0;
    if (arrNotas.length > 1) {
      let total = arrNotas.reduce((a, b) => a + b);
      resultado = total / cantAlumnos;
    } else {
      resultado = arrNotas[0];
    }
    return resultado;
  };

  const changeData = (disciplina, nota) => {
    let newNota = parseFloat(nota);
    const nuevoArr = data.map((objeto) => {
      if (objeto.name === disciplina) {
        return {
          ...objeto,
          cantAlumnos: objeto.cantAlumnos + 1,
          promedioDeNotas: promedioNotas(
            objeto.cantAlumnos + 1,
            objeto.cantNotas.concat(newNota)
          ),
          cantNotas: objeto.cantNotas.concat(newNota),
        };
      } else {
        return objeto;
      }
    });
    setData([...nuevoArr]);
  };

  return (
    <div className="container">
      <Formulario data={dataFilter} changeData={changeData} />
    </div>
  );
}
export default PromedioAlumDisc;
