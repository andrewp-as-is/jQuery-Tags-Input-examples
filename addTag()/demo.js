$('#tags').tagsInput();
$("button").click(function(){
    if ($('#tags').tagExist('new_tag')) {
        $('#tags').removeTag('new_tag');
    } else {
        $('#tags').addTag('new_tag');
    }
});
