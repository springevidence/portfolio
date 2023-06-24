import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Button from "../common/button/Button";
const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form action="" className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea cols="50" rows="15"></textarea>
                </form>
                <Button type={'contactButton'} title={'Отправить'}/>
            </div>
        </div>
    );
};

export default Contacts;