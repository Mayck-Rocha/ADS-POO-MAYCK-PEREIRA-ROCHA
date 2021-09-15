// Letra A

enum siglas {PI, CE, MA}
for (let i = 0; i <= siglas.MA; i++){
    console.log(siglas[i])
}

// Letra B

for(let i = 0; i <= siglas.MA; i ++){
    console.log(i)
}

/*Na letra "a" foi criado um enum "siglas" e é imprimida cada sigla percorrendo o enum.
Já na letra "b" foi imprimida apenas a posição da sigla no enum
*/