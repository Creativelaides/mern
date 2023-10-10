import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CrearEmpleado = () => {

  const history = useNavigate();
  const [empleado, setEmpleado] = useState({
    name: '',
    position: '',
    office: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado({ ...empleado, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hacer una solicitud POST al servidor para crear un nuevo empleado
    axios.post(`/api/empleados`, empleado)
      .then(() => {
        history.push('/empleados'); // Redirigir a la lista de empleados después de crear uno nuevo
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Crear Nuevo Empleado
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 dark:text-gray-400">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={empleado.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="block text-gray-600 dark:text-gray-400">
            Cargo:
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={empleado.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="office" className="block text-gray-600 dark:text-gray-400">
            Oficina:
          </label>
          <input
            type="text"
            id="office"
            name="office"
            value={empleado.office}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block text-gray-600 dark:text-gray-400">
            Salario:
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={empleado.salary}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-UT-orange text-white hover:bg-yellow-600 px-4 py-2 rounded"
          >
            Crear Empleado
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearEmpleado;
