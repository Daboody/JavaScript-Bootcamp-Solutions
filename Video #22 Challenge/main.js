let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

    /*
    [++a] [+] [+b++] [+] [+c++] [-] [+a++]
        [++a] / [+b++] / [+c++] / [+a++]
    value:  11  + 20 + 80 - 11 
    Explain: pre increment / Unary Plus + post increment / Unary Plus + post increment /  Unary Plus + post increment 
            [+] [+] [-]
    Explain: add / add / subtraction 
    */

    /*
    [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
        [++a] / [-b] / [+c++] [-a++] [+a]
    value: 13 / -21 / 81 / 14 / 15
    Explain: pre increment / Unary Negation / Unary Plus + post increment / Unary Negation + post increment 
            [+] [+] [-] [+]
    Explain: add / add / subtraction / add
    */