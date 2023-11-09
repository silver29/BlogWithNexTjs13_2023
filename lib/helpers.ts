import readingTime from "reading-time";
import { DateTime } from 'luxon';

export const getReadingTime = (text: string, locale:string) => {
    //return readingTime(text).text;
    const minutes = readingTime(text).minutes;
    // Floor to 1 decimal place
    const minutesRounded = Math.floor(minutes)
    if (locale === 'de'){
        if(minutesRounded === 1){
            return `${minutesRounded} Minute`;
        } else {
            return `${minutesRounded} Minuten`;
        }
    }else{
        if(minutesRounded === 1){
            return `${minutesRounded} minute`;
        } else {
            return `${minutesRounded} minutes`;
        }
    }
};

export const getRelativeDate = (date: string, locale:string) => {
    return DateTime.fromISO(date).setLocale(locale).toRelative();
};