/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
    $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
    $('.heading-quotes').css('color', 'white').css('padding-left', '10px');    
    $('.quote').css('color', 'white').css('font-style', 'italic');
    $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
    $('#quotes:last-child').css('padding-bottom', '4px');
    $('#section-quotes').prependTo('#sections');
    $('#section-bio p:last-child').remove();
    let $section = $('<section>').attr('id', 'section-rider');
    let topRated = data.discography.topRated;
    let TopRatedForSure = _.map(topRated, function(recording) {
        $('<ul>').append($('<div>').text(recording.title).addClass('title-top-rated').attr('art', recording.art));
    });
    $('#list-top-rated').append(TopRatedForSure)
        // uncomment this to inspect all available data; delete when done //

        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });


        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
