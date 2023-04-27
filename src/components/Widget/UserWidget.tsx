import React, { useState } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { Buttons } from "../UI/index";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome": "歡迎"
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });



const Widget = () => {

  const user:string = 'Saul';
  const { t } = useTranslation();

  return (
    <div className="flex items-center">
      <div className="">
        <img
          src="https://fakeimg.pl/200x200/?retina=1&text=Avatar&font=noto" alt="avatar"
          className="rounded-full w-16 h-16"
        />
      </div>
      <div className="ml-3">
        <div className="text-lg">
          {t('Welcome')}<span>{user}</span>
        </div>
        <div className="text-sm">Developer</div>
        <Buttons type={'primary'}>Test</Buttons>
        <Buttons type={'danger'}>Test</Buttons>
      </div>
    </div>
  )  
}

export default Widget;