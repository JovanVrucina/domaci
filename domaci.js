function renderArticle(article){
    $stavka = $(`<tr></tr>`)
    $podaci = $(`
    <td>${article['naziv']}</td>
    <td>${article['cena']}</td>
    <td><button class='oduzmi'>-</button><span class='brojac'>${article['komada']}</span><button class='dodaj'>+</button></td>
    <td>${article['cena']*article['komada']}</td>
    `)
    $stavka.append($podaci)
    return $stavka

}

function renderArticleList(target, data){
    data.map(s => $(target).append(renderArticle(s)))
}