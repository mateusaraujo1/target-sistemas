function q04() {
    var SP = 67836.43;
    var RJ = 36678.66;
    var MG = 29229.88;
    var ES = 27165.48;
    var outros = 19849.53;

    var total = SP + RJ + MG + ES + outros;
    
    var array = [SP, RJ, MG, ES, outros];
    
    var percentual = [0, 0, 0, 0, 0];
    
    for (let i = 0; i < 5; i++)
    {
        percentual[i] = (array[i] / total) * 100;
        percentual[i] = percentual[i].toFixed(2);
    }
        
    document.getElementById("sp_percentual").innerHTML = "SP = %" + percentual[0];
    document.getElementById("rj_percentual").innerHTML = "RJ = %" + percentual[1];
    document.getElementById("mg_percentual").innerHTML = "MG = %" + percentual[2];
    document.getElementById("es_percentual").innerHTML = "ES = %" + percentual[3];
    document.getElementById("outros_percentual").innerHTML = "outros = %" + percentual[4];
}