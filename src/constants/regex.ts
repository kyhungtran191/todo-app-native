export const NO_SPECIAL_CHARS_REG = /^[a-zA-Z0-9-_]*$/;
export const EMAIL_REG =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_REG =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/g;
export const PHONE_REG = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;