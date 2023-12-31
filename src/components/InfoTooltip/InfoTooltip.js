import iconSuccess from '../../images/reg-success.svg';
import iconFailure from '../../images/reg-failure.svg';
import useClosePopupsOnKeyPressEsc from '../hooks/useClosePopupsOnKeyPressEsc';

export default function InfoTooltip({ isData, isOpened, onClose, closePopupsOnOutsideClick }) {
  useClosePopupsOnKeyPressEsc(isOpened, onClose);

  return (
<div className={`popup ${isOpened && 'popup__opened'}`} onClick={closePopupsOnOutsideClick}>

      <div className="popup__container popup__container_type_info-tooltip">
        <img className="popup__icon" src={isData ? iconSuccess : iconFailure} alt="Иконка успешной регистрации на сайте" />
        <h3 className="popup__title">
          {isData ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h3>
        <button type="button" aria-label="Закрытие модального окна" onClick={onClose} className="popup__close" />
      </div>
    </div>
  );
};