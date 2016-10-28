/**
 * Created by pepillo on 28/10/16.
 */
"use strict";

module.exports ={

    isEmail :function isValidEmail(mail)
    {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    }

}
