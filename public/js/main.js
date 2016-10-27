$(document).ready(function() {

    // Beautify the Table and add search function
    $('.filterable .btn-filter').click(function() {
        var $panel = $(this).parents('.filterable'),
            $filters = $panel.find('.filters input'),
            $tbody = $panel.find('.table tbody');
        if ($filters.prop('disabled') == true) {
            $filters.prop('disabled', false);
            $filters.first().focus();
        } else {
            $filters.val('').prop('disabled', true);
            $tbody.find('.no-result').remove();
            $tbody.find('tr').show();
        }
    });

    $('.filterable .filters input').keyup(function(e) {
        /* Ignore tab key */
        var code = e.keyCode || e.which;
        if (code == '9') return;
        /* Useful DOM data and selectors */
        var $input = $(this),
            inputContent = $input.val().toLowerCase(),
            $panel = $input.parents('.filterable'),
            column = $panel.find('.filters th').index($input.parents('th')),
            $table = $panel.find('.table'),
            $rows = $table.find('tbody tr');
        /* Dirtiest filter function ever ;) */
        var $filteredRows = $rows.filter(function() {
            var value = $(this).find('td').eq(column).text().toLowerCase();
            return value.indexOf(inputContent) === -1;
        });
        /* Clean previous no-result if exist */
        $table.find('tbody .no-result').remove();
        /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
        $rows.show();
        $filteredRows.hide();
        /* Prepend no-result row if all rows are filtered */
        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="' + $table.find('.filters th').length + '">No result found</td></tr>'));
        }
    });


    //login form animate
    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    // Admmin Nav tabs
    $('#events').click(function(e) {

        $("#viewevent").delay(100).fadeIn(100);
        $("#viewreport").fadeOut(100);
        $('#report').removeClass('active');
        $(this).addClass('active');
        $.getJSON("https://attendanceregister-64a7b.firebaseio.com/events.json", function(result) {
            viewEvents(result);
        });
        e.preventDefault();
    });

    $('#report').click(function(e) {
        $("#viewreport").delay(100).fadeIn(100);
        $("#viewevent").fadeOut(100);
        $('#events').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $('#btn-view-report').click(function(e) {
        var users, theEvent;
        theEvent = $("#event-to-view").val();
        alert(theEvent);

        $.getJSON("https://attendanceregister-64a7b.firebaseio.com/users.json", function(result) {
            users = result
            $.getJSON("https://attendanceregister-64a7b.firebaseio.com/events/" + theEvent + ".json", function(result2) {

                viewReport(users, result2);
            });
        });
        e.preventDefault();

    });


    // var eventDetails = {'eventTitle':req.body.eventTitle, 'eventDate':req.body.eventDate,'eventStartTime':req.body.eventStartTime };
    // indexcontroller.createnewevent(eventDetails);



    // var eventList = {};
    // var eventListTags = [];
    // var jsonEvents = dummylist;
    // for (events in jsonEvents) {
    //     eventList[jsonEvents[events].title] = events;
    //     eventListTags.push(jsonEvents[events].title);
    // }
    // $("#search").autocomplete({
    //     source: [1, 2, 3, 5]
    // });


});
var userlist = {
        "users": {
            "hiskonxeptz": {
                "fullname": "Uyiosa Enabulele",
                "email": "3466"
            },
            "hiskonxeptz2": {
                "fullname": "Uyiosa ggEnabulele",
                "email": "34gfh66"
            }
        }
    }
    // var dummylist = {
    //     "event001": {
    //         "eventTitle": "Bootcamp",
    //         "date": "3466",
    //         "startTime": "657657",
    //         "attendees": {
    //             "hiskonxeptz": "1299",
    //             "nosa": "1299"
    //         }
    //     }


function viewReport(jsonUserDetails, jsonEvents) {
    $('#report-desc').text('Attendance Report for ' + jsonEvents.eventTitle);
    $('#report-table > tbody').html("");
    var sNo = 1;
    for (var user in jsonUserDetails) {
        var email = jsonUserDetails[user].email.split("@")[0];
        var rowData = '<td>' + sNo++ + '</td>' + '<td>' + jsonUserDetails[user].fullname +
            '</td>' + '<td>' + jsonUserDetails[user].email + '</td>';
        rowData += jsonEvents.attendees.hasOwnProperty(email) ? '<td>' +
            "Present" + "</td>" : "<td>" + "Absent" + '</td>';
        $('#report-table > tbody:last-child').append('<tr>' + rowData + '<tr>')
    }

}



function viewEvents(jsonEvents) {
    $('#event-table > tbody').html("");
    var sNo = 1;

    for (var eachEvent in jsonEvents) {
        var rowData = '<td>' + sNo++ + '</td>' + '<td>' + jsonEvents[eachEvent].eventTitle +
            '</td>' + '<td>' + jsonEvents[eachEvent].date + '</td>' + '<td>' +
            jsonEvents[eachEvent].startTime + '</td>' + '<td>' + Object.keys(jsonEvents[eachEvent].attendees).length + '</td>';
        $('#event-table > tbody:last-child').append('<tr>' + rowData + '<tr>')
    }

}