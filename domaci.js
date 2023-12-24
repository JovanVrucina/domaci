function renderArticle(article){
    $stavka = $(`<tr></tr>`)
    $podaci = $(`
    <td>${article['naziv']}</td>
    <td>${article['cena']}</td>
    <td><button class='oduzmi'>-</button><span class='brojac'>${article['komada']}</span><button class='dodaj'>+</button></td>
    <td class='UCena'>${article['cena']*article['komada']}</td>
    `)

    $podaci.find('.oduzmi').on('click', function() {
        if(parseInt($(this).parent().find('.brojac').text())>0){
        article['komada']--;
    
        $(this).parent().find('.brojac').text(article['komada']);
    
        $(this).parent().parent().find('.UCena').text(article['cena']*article['komada']);
        
        renderSuma('.cenaSvega')
        }
    
        });
        $podaci.find('.dodaj').on('click', function() {

            article['komada']++;
    
            $(this).parent().find('.brojac').text(article['komada']);
    
            $(this).parent().parent().find('.UCena').text(article['cena']*article['komada']);

            renderSuma('.cenaSvega')
        });
    
    $stavka.append($podaci)
    return $stavka

}

function renderArticleList(target, data){
    data.map(s => $(target).append(renderArticle(s)))
    $(target).append(renderSuma('.cenaSvega'))
}

function renderSuma(target){
    var suma = 0;
    $(".UCena").each(function(){
        suma += parseInt($(this).text());
    })

    $(target).text(suma)
}

