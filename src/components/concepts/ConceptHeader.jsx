import s from './ConceptHeader.module.scss';

import keyConceptsImage from '../../assets/images/key-concepts.png';

/**
 * @typedef ConceptHeaderProps
 * 
 * @param {ConceptHeaderProps} props
 * @returns {JSX.Element}
 */
const ConceptHeader = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
    </div>
  );
};

export default ConceptHeader;
