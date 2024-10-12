function q05() 
{
    let texto = document.getElementById("texto").value;
    let texto_invertido = ""; 

    for (let i = texto.length - 1; i >= 0; i--) {
        texto_invertido += texto[i]; 
    }

    document.getElementById("texto_invertido").innerHTML = texto_invertido;
}