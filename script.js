/*
    Assignment 05
    Name Sahil Sharma
    id 0823544
*/
class ContentItem {
    constructor(id, name, description, categoryGenre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryGenre = categoryGenre;
    }

    updateContentItem(id, name, description, categoryGenre) {
        if (this.id === id) {
            if (name) this.name = name;
            if (description) this.description = description;
            if (categoryGenre) this.categoryGenre = categoryGenre;
        }
    }
 



    toString() {
        return `
        <div class="content-item-wrapper" id="content-item-${this.id}">
              <h2>${this.name}</h2>
              <p>${this.description}</p>
            <div>${this.categoryGenre}</div>
        </div>
        `;
    }
}
        const contentItems = [
        new ContentItem(1, 'Great Wall of China', 'One of the worlds largest building', 'China'),
        new ContentItem(2, 'Petra', 'The ancient city of Petra is located in a remote valley', 'Jordan'),
        new ContentItem(3, 'Machu Picchu', 'This Incan site near Cuzco was discovered in 1911 ', 'Peru'),
        new ContentItem(4, 'Taj Mahal', 'complex in Agra is regarded as one of the worlds most iconic monuments', 'India'),
        new ContentItem(5, 'Colosseum', 'The Colosseum in Rome was built in the first century by order of the Emperor', 'Italy')
];
$(document).ready(function() {
    contentItems.forEach(item => {
        $('#content-item-list').append(item.toString());
    });

    $('.content-item-wrapper').css({
        'border': '1px solid black',
        'width': '70%',
        'padding': '20px',
        'margin': '20px auto'
    });
});

$('#successUpdateBtn').click(function() {
    contentItems[0].updateContentItem(1, 'Sahil sharma', null, null);
    $('#content-item-list').empty();
    contentItems.forEach(item => {
        $('#content-item-list').append(item.toString());
    });
    $('.content-item-wrapper').css({
        'border': '1px solid black',
        'width': '70%',
        'padding': '20px',
        'margin': '20px auto'
    });
});

$('#failureUpdateBtn').click(function() {
    contentItems[0].updateContentItem(99, 'Unknown', null, null);  
});


    


