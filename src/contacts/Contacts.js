import React from 'react';
import style from './Contacts.module.scss'
const Contacts = () => {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={style.container}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contactForm}>
                    <input type="text" placeholder={'name'}/>
                    <input type="text" placeholder={'email'}/>
                    <textarea placeholder={'message'}></textarea>
                </form>
                <button type={'submit'} className={style.button}>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;