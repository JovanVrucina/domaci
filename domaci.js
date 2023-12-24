function renderArticle(article){
    $stavka = $(`<tr></tr>`)
    $podaci = $(`
    <td>${article['naziv']}</td>
    <td>${article['cena']}</td>
    <td><button class='oduzmi'>-</button><span class='brojac'>${article['komada']}</span><button class='dodaj'>+</button></td>
    <td class='UCena'>${article['cena']*article['komada']}</td>
    `)
    $stavka.append($podaci)
    return $stavka

}

function renderArticleList(target, data){
    data.map(s => $(target).append(renderArticle(s)))
    $(target).append(renderSuma())
}

function renderSuma(){
    var suma = 0;
    $(".UCena").each(function(){
        suma += parseInt($(this).text());
    })

    $sveukupno = $(`<p>${suma}</p>`);

    return $sveukupno
}