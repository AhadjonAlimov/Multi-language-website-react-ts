import React, { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import aboutImg from "../assets/about.jpg";
import { translate } from "../langs";
import { RootState } from "../store";


const About: FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);


    return (
        <Fragment>
            <Header />
            <section className="about">
                <div className="container">
                    <h1>{translate('about', language)}</h1>
                    <img src={aboutImg} alt="" />
                    <p>{translate('aboutUsText', language)}</p>
                </div>
            </section>
        </Fragment>
    );
}

export default About;