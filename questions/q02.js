function q02() {

    let num = parseInt(document.getElementById("num_fibonacci").value)

    let num_anterior = 0
    let num_atual = 1
    let aux;

    if (num == num_anterior) 
    {
        document.getElementById("result_num_fibonacci").innerHTML = num + ' pertence à sequência';
        return true;
    }

    while(num_anterior <= num) 
    {
        if (num_atual == num) 
        {
            document.getElementById("result_num_fibonacci").innerHTML = num + ' pertence à sequência';
            return true;
        }
        else
        {
            aux = num_anterior;
            num_anterior = num_atual;
            num_atual = num_atual + aux;
        }
    }

    document.getElementById("result_num_fibonacci").innerHTML = num + ' não pertence à sequência';
    return false;
}