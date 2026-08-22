 numero = prompt("Digite um número inteiro maior ou igual a 2:");

document.write("<table border='1'>");

document.write("<tr>");
document.write("<th>Decimal</th>");
document.write("<th>Binário</th>");
document.write("<th>Hexadecimal</th>");
document.write("</tr>");

for (i = 0; i <= numero; i++) {

    document.write("<tr>");

    document.write("<td>" + i + "</td>");
    document.write("<td>" + i.toString(2) + "</td>");
    document.write("<td>" + i.toString(16) + "</td>");

    document.write("</tr>");
}

document.write("</table>");