import uz from "./uz.json"
import en from "./en.json"
import ru from "./ru.json"


export const translate = (key: string, language: string): string => {
    let langData: { [key: string]: string } = {};

    if (language === "UZ") {
        langData = uz;
    }else if (language === "EN") {
        langData = en;
    }else if (language === "RU") {
        langData = ru;
    }

    return langData[key];
}