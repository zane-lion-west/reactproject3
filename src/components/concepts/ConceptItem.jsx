/* eslint-disable react/prop-types */
import s from './ConceptItem.module.scss';

/**
 * @typedef ConceptItemProps
 * 
 * @param {ConceptItemProps} props
 * @returns {JSX.Element}
 */
const ConceptItem = (props) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.concepts} >
        <li className={s.concept}>
          <img src={props.image} alt={props.title} />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </li>
      </ul>
    </div>
  );
};

export default ConceptItem;
