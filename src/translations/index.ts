/* eslint-disable react-hooks/rules-of-hooks */
import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';

import meager from './mearger';
// import {getLanguage, setLanguage} from '@shared/';

import {NativeModules, Platform} from 'react-native';
import {getLanguage, setLanguage} from '../shared/utils/helper/storage';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  // Since we set async to true, detect has now callback function...
  detect: async (callback: (lang: string) => void) => {
    const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
        : NativeModules.I18nManager.localeIdentifier;
    let language = deviceLanguage.indexOf('ar') >= 0 ? 'ar' : 'en';
    const variableLang = await getLanguage();
    if (
      (variableLang != null && variableLang === 'ar') ||
      variableLang === 'en'
    ) {
      language = variableLang;
    }
    callback(language ?? 'en');
  },
  init: () => {},
  cacheUserLanguage: (lng: string) => setLanguage(lng),
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: meager,
    // lng: 'ar',
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
    supportedLngs: ['en', 'ar'],
    nonExplicitSupportedLngs: true,
    fallbackLng: 'en',
    debug: false, // process.env.NODE_ENV === 'development',
    react: {
      useSuspense: false, //   <---- this will do the magic
    },
  });
export default i18n;
