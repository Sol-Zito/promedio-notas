import React from "react";

const Formulario = ({ data, handleClick }) => {
  const dataFilter = data;

  const validDisciplina = (dis) => dataFilter.some((de) => de.name === dis);
  const validNota = (nota) => {
    if (nota >= 0 && nota < 11) {
      return true;
    } else {
      return false;
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    const disciplina = event.target.disciplina.value;
    const nota = event.target.calificacion.value;
    const isValidNota = validNota(nota);
    const isValidDisciplina = validDisciplina(disciplina);
    if (isValidNota && isValidDisciplina) {
      alert(`su nota en ${disciplina} es de: ${nota}`);
      handleClick(disciplina, nota);
      
    } else if (isValidNota && !isValidDisciplina) {
      alert(`el curso seleccionado no es válido`);
    } else {
      alert("algun dato no es correcto");
    }

  }

  return (
    <>
      <h1>Promedio de Alumnos por Disciplina</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select name="disciplina">
            <option>Selecione una disciplina</option>
            <option value="Bases de Datos">Bases de Datos</option>
            <option value="Desenvolvimento Backend">Desarrollo Backend</option>
            <option value="Desenvolvimento Frontend">
              Desarrollo Frontend
            </option>
            <option value="Devops">Devops</option>
          </select>

          <input
            type="number"
            placeholder="Ingrese calificacion"
            name="calificacion"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Formulario;
