import React from 'react';
import PropTypes from 'prop-types';
/** Como não vai ter informações de state, poderá ser usado as funções */

/** É passado como parametros um objeto contendo todas as properties */
function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  )
}

TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;