var host = 'http://election2013.nation.co.ke/';

$('.menu-link').click(function(e) {
 e.preventDefault();
  $('nav').slideToggle('fast', function(){});
  $('nav').toggleClass('ryan');
});

 $(function() {
    $.getJSON(host + 'static-json/county.json', function(data) {
        var items = [];
        var options = [];

        $.each(data, function(key, val) {
            //items.push('<li><a href="' + Config.base_url + 'county/' + data[key].COUNTY_NO + '" id="' + data[key].COUNTY_NO + '">' + data[key].COUNTY_NAME + '</a></li>');
            options.push('<option value="' + data[key].COUNTY_NO + '">' + data[key].COUNTY_NAME + '</option>');
        });
        //$('.county-drop ul.county').html(items.join(''));

        if ($('select.select-county-options').length)
            $('select.select-county-options').append(options.join(''));
    });

    $.getJSON(host + 'static-json/party.json', function(data) {
        var items = [];
        var options = [];
        
        $.each(data, function(key, val) {
            //items.push('<li><a href="' + Config.base_url + 'party/' + data[key].PARTY_ID + '" id="' + data[key].PARTY_ID + '">' + data[key].PARTY_INITIALS + '</a></li>');
            options.push('<option value="' + data[key].PARTY_ID + '">' + data[key].PARTY_NAME + '</option>');
        });
        //$('.party-drop ul.party').html(items.join(''));
        if ($('select.select-party-options').length)
            $('select.select-party-options').append(options.join(''));

    });

    if ($('select.select-constituency-options').length) {
        $.getJSON(host + 'static-json/constituency.json', function(data) {
            var items = [];

            $.each(data, function(key, val) {
                items.push('<option value="' + data[key].CONSTITUENCY_NO + '">' + data[key].CONSTITUENCY_NAME + '</option>');
            });
            $('select.select-constituency-options').append(items.join(''));
        });
    }

});

