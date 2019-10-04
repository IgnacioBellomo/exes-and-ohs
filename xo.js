const XO = aString => {
    let xTotal = 0;
    let oTotal = 0;
    for (let i = 0; i < aString.length; i++) {
        switch (aString.charAt(i)) {
            case 'x':
                xTotal++;
                break;
            case 'X':
                xTotal++;
                break;
            case 'o':
                oTotal++;
                break;
            case 'O':
                oTotal++;
                break;
            default:
                break;    
        }
    }
    if (xTotal === oTotal) {
        return true;
    } else {
        return false;
    }
}