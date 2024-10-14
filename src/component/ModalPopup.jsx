import classes from './modal.module.css';
export default function ModalPopup({children, title, handleClick}) {

  return <div className={classes.modal}>
    <div className={classes.model__container}>
      <div className={classes.close} onClick={() => handleClick(false)}>&times;</div>
      <div className={classes.modal__title}>
        <h5>{title}</h5>
      </div>
      <div className={classes.modal__content}>{children}</div>
      <div className={classes.modal__footer}>
        <button onClick={() => handleClick(false)} type='button' className='btn btn-sm btn-secondary'>Close</button>
      </div>
    </div>
  </div>
}