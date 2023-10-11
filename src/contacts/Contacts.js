import React from 'react';
import style from './Contacts.module.scss'
const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contactForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <button type={'submit'} className={style.button}>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;