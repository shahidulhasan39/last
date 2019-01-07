
//Match height
 function equal_height() {
            // Equal Card Height, Text Height and Title Height
            // jQuery('.category-content, .news-content').jQueryEqualHeight('.card .card-body .card-title');
            // jQuery('.category-content, .news-content').jQueryEqualHeight('.card .card-body .card-text');
            jQuery('.category-content, .news-content').jQueryEqualHeight('.card');
        }
        // mess height jquery diclear
         jQuery(window).on('load', function(event) {
            equal_height();
        });
        jQuery(window).resize(function(event) {
            equal_height();
        });

