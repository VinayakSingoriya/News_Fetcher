
console.log("This is my Daily News Update");

let source="the-times-of-india";
let apiKey='your_apiKey';;
let newsAccordion=document.getElementById('newsAccordion');

const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/sources?apiKey=your_apiKey`,true);
xhr.onload=function() {
    if (this.status==200) {
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(json);
        console.log(articles);
        let newsHTML="";
        articles.forEach(function(element,index) {
            let news=
                           `<div  class="card">
                  <div class="card-header " id="heading${index}">
                     <h2 class="mb-0">
                     <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><b>Breaking News ${index+1}:</b>
                     ${element.title}
                      </button>
                    </h2>
                 </div>

                 <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
                   <div class="card-body text-color"> ${element.content}.<a href="${element.url}" target="_blank" >Read more here</a> </div>
      </div>
     </div>`
     newsHTML+=news;

        });
      newsAccordion.innerHTML=newsHTML;
    } else {
        console.log('some error occured');
    }

}
xhr.send();


