import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFound({mainPage}) {
    const [t] = useTranslation('common');

    return (
        <div className='NotFound'>
            <p className="number">404</p>
            <p>{t('common.notFound')}</p>

            <p className='text'>{t('common.text')}</p>


            <Link to={mainPage}>
                <div className="homeBtn">
                    <p>{t('common.back')}</p>
                </div>
            </Link>


        </div>
    )
}
