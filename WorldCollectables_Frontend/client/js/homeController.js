/**
 * Created by churmuzache on 9/11/15.
 */

define([], function (Mock) {
    var mockConfig = {
        "perRow": 3
    };
    var mock = [
        {
            "imagePath": "../resources/images/panda.jpg",
            "title": "Buy this panda!",
            "description": "This is the world's cutest panda :D"
        },
        {
            "imagePath": "../resources/images/tiger.jpg",
            "title": "Buy this tiger!",
            "description": "This is the world's cutest tiger here :D"
        },
        {
            "imagePath": "../resources/images/ponny.jpg",
            "title": "Buy this ponny!",
            "description": "This is the world's cutest ponny :D"
        },
        {
            "imagePath": "../resources/images/tiger.jpg",
            "title": "Buy this tiger!",
            "description": "This is the world's cutest tiger :D"
        },
        {
            "imagePath": "../resources/images/panda.jpg",
            "title": "Buy this panda!",
            "description": "This is the world's cutest panda :D"
        },
        {
            "imagePath": "../resources/images/koala.jpg",
            "title": "Buy this koala!",
            "description": "This is the world's cutest koala :D"
        }
    ];

    function HomeController() {

    }

    HomeController.prototype.start = function () {
        console.log(mock);
        this.createSlot();

    };

    HomeController.prototype.createSlot = function () {
        var rowNumber = Math.floor(mock.length / mockConfig.perRow);

        if (mock.length % mockConfig.perRow > 0) {
            rowNumber++;
        }
        console.log(rowNumber);
        var current =0;
        var counter= 0,
            start=0;
        for (var i = 0; i < rowNumber; i++) {
            var rowDiv = '<div class="row">';
            start=counter;
            counter+=mockConfig.perRow;
            while(start < counter && start < mock.length) {
                var slot = '<div class="col-xs-6 col-sm-4"><div class="thumbnail"><img src="%%imagePath" alt="..."><div class="caption"><h3>%%title</h3>' +
                    '<p>%%description</p><p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default"role="button">Button</a></p></div></div></div>';

                slot = slot.replace("%%imagePath", mock[start].imagePath);
                slot = slot.replace("%%title", mock[start].title);
                slot = slot.replace("%%description", mock[start].description);

                rowDiv += slot;
                start++;
            }

            rowDiv += '</div>';
            $('body').append(rowDiv);
            current++;
        }


    };


    return HomeController;
});


