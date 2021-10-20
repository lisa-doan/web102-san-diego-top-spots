$(document).ready(function() {
// write your code here
 $.getJSON("data.json", function(result){
        $.each(result, function(i, field){
            let $tr = $("<tr>").append(
            $("<td>").text(field.name),
            $("<td>").text(field.description),
            $("<td>").append(
            `<a href='https://www.google.com/maps?q=${field.location[0]},${field.location[1]}' target='_blank'>Open</a>`
            ));
            $("table").append($tr);
        });
    });
});
