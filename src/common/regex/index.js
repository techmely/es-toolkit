export const emailRegex = new RegExp(/^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/);
export const isValidEmail = (email) => emailRegex.test(email);
export const vietnamPhoneRegex = new RegExp(/^0(\d{9})$/);
export const isValidVnPhone = (phone) => vietnamPhoneRegex.test(phone);
export const urlRegex = /(((^https?:(?:\/\/)?)(?:[\w$&+,:;=-]+@)?[\d.A-Za-z-]+(?::\d+)?|(?:www.|[\w$&+,:;=-]+@)[\d.A-Za-z-]+)((?:\/[\w%+./~-]*)?\??[\w%&+.;=@-]*(?:#\w*)?)?)$/;
export const isValidUrl = (path) => urlRegex.test(path);
export const multilineCommentsRegex = /\/\*(.|[\r\n])*?\*\//gm;
export const singlelineCommentsRegex = /\/\/.*/g;
export const escapedSpaceCharactersRegex = /( |\\t|\\n|\\f|\\r)+/g;
