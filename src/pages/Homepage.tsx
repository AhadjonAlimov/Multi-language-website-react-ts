import React, { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { translate } from "../langs";
import { RootState } from "../store";


const Homepage: FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);


    return (
        <Fragment>
            <Header fixed transparent />
            <section className="intro">
                <div className="intro__overlay"></div>
                <div className="intro__body">
                    <h1>React</h1>
                    <p>{translate('introText', language)}</p>
                </div>
            </section>
        </Fragment>
    );
}

export default Homepage;