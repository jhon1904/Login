
function loguear()
{

    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="jhon" && pass=="1904")
    {

        window.location="https://jhon1904.github.io/Mira-Tv/";
    }

    else
    {
        alert("Usuario o Contraseña Incorrecta")
    }
}