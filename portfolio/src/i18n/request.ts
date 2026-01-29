import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // Await the locale from the request
  let locale = await requestLocale;
  
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) notFound();
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});