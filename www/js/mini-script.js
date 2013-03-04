var host = 'http://election2013.nation.co.ke/';

$('.menu-link').click(function(e) {
 e.preventDefault();
  $('nav').slideToggle('fast', function(){});
  $('nav').toggleClass('ryan');
});

var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
    },
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);

        // Toggle the state from "pending" to "complete" for the reported ID.
        // Accomplished by adding .hide to the pending element and removing
        // .hide from the complete element.
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};

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

