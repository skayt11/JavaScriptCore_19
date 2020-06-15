$('input[value="Відправити GET"]').click(() => {
    const User = {
        fName: $('#name').val(),
        lName: $('#lastname').val(),
        age: $('#age').val(),
        address: $('#address').val()
    }
    $('#age').css('background-color', '').attr('placeholder', '');
    if (User.age >= 1 && User.age <= 100) {
        $.each(User, (e) => {
            return console.log(User[e] += '.ValidatedByGET');
        });
        const textget = 'The message was sent using the GET method.';
        $.get("/formGet", `lName=${User.lName}&fName=${User.fName}&age=${User.age}&address=${User.address}`)
            .done((data) => {
                console.log(data);
            })
            .fail((error) => {
                console.error(error);
            })
            .always(() => {
                $('#message').text(textget);
            });
    } else {
        $('#age').css('background-color', '#c00').attr('placeholder', 'Дозволений вік від 1 до 100');
    }
    $.each($('[type=text]'), () => {
        $('[type=text]').val('');
    })
});

$('input[value="Відправити POST"]').click(() => {
    const User = {
        fName: $('#name').val(),
        lName: $('#lastname').val(),
        age: $('#age').val(),
        address: $('#address').val()
    }
    $('#age').css('background-color', '').attr('placeholder', '');
    if (User.age >= 1 && User.age <= 100) {
        $.each(User, (e) => {
            return console.log(User[e] += '.ValidatedByPOST');
        });
        const textget = 'The message was sent using the POST method.';
        $.ajax({
                url: '/formPost',
                type: "POST",
                data: JSON.stringify(User),
                contentType: "application/json",
            })
            .done((data) => {
                console.log(data);
            })
            .fail((error) => {
                console.error(error);
            })
            .always(() => {
                $('#message').text(textget);
            });
    } else {
        $('#age').css('background-color', '#c00')
            .attr('placeholder', 'Дозволений вік від 1 до 100')
    }
    $.each($('[type=text]'), () => {
        $('[type=text]').val('');
    })
});