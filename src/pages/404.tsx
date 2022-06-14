import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { translate } from "../langs";
import { RootState } from "../store";


const Page404: FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);

    return (
        <div className="page-404">
            <div className="container">
                <h1>404</h1>
                <p>{translate('pageDoesNotExist', language)}</p>
                <p><Link to="/">{translate('returnToHomepage', language)}</Link></p>
            </div>
        </div>
    );
}

export default Page404;