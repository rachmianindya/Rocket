var news = [
    {
        nptitle: "Hello World!",
        npcontent: `Is this the real life?
        Is this just fantasy?
        Caught in a landslide.
        No escape from reality.
        Open your eyes.
        Look up to the skies and see.
        I'm just a poor boy, I need no sympathy.
        Because I'm easy come, easy go.
        A little high, little low.
        Anyway the wind blows, doesn't really matter to me, to me.`
    }
]
var ann = []


function submitNews(){
    var title = document.getElementById('ntitle')
    var content = document.getElementById('ntext')
    var newsList = document.getElementById('listNews')

    var objNews = {
        nptitle: title.value,
        npcontent: content.value
    }
    news.unshift(objNews)
    console.log(news)

    inputNews()
}

function inputNews(){
    listNews.innerHTML = ""
    for (var i = 0; i < news.length; i++){
        listNews.innerHTML+=
        `<news-content>
        <a href=""><h3>${news[i].nptitle}</h3></a>
        <p>
            ${news[i].npcontent}
        </p>
    </news-content>`
    }
}