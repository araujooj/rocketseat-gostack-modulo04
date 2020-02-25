import React from "react";
import PropTypes from 'prop-types'
// import { Container } from './styles';

export default function TechItem({ tech, onDelete }) {
  return (
    <li key={tech}>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Item Oculto'
}
TechItem.PropTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}
