var tableRef = null;

//test

$(function () {
    tableRef = $("#tableZaposlenici").DataTable({
        data: [],
        columns: [
            { data: 'Name', title: "Naziv" },
            { data: 'category_name', title: "Kategorija" },
            { data: 'Description', title: "Opis" },
            { data: 'Id', title: 'Mijenjaj', render: function (data) { return "<input type ='button' value='Promijeni' onclick='ZaposleniciGetByid(" + data + ")' >" } },
            { data: 'Id', title: "Brisi", render: function (data) { return "<input type='button' value ='Brisi' onclick='ZaposleniciDelete(" + data + ")'>" } }

        ]
    });

    $("#_dob").datepicker({ dateFormat: "yy-mm-dd" });
    $("#alt_dob").datepicker({ dateFormat: "yy-mm-dd" });

    $("#odjel_id_filter").on("change", function () {
        tableRef.search($("#odjel_id_filter").val());
        tableRef.draw();
    })

    $("#dodaj").click(function () {
        $("#modal").modal();
        $("#modal").find("input[type=text]").val("");
    })

    $("#izmjeni").click(function () {
        $("#modal").modal();
        $("#modal_form").find("input[type=text]").val("");
    })

    $.getJSON("api/category", function (data: Models.Category[]) {
        $.each(data, function (key, val) {
            var opcija = "<option value='" + val.Id + "'>" + val.Name + "</option>"
            var opcija2 = "<option value='" + val.Name + "'>" + val.Name + "</option>"

            $("#odjel_id_add").append(opcija);
            $("#odjel_id_alter").append(opcija);
            $("#odjel_id_filter").append(opcija2);
        })
    })

    ZaposleniciGet();
})

function ZaposleniciGet() {
    $.getJSON("api/events/listall", function (data: Models.Event[]) {
        tableRef.clear();
        tableRef.rows.add(data);
        tableRef.draw();

        $('[data-toggle="tooltip"]').tooltip();
    });
}

function ZaposleniciGetByid(idEvent: number) {
    $.getJSON("api/events/" + idEvent, function (data: Models.Event) {
        $("#modal_alter").modal();

        $("#alt_name").val(data.Name);
        $("#alt_surname").val(data.Description);
        $("#idHolder").val(data.Id);
        $("#odjel_id_alter").val(data.Id_category);
    })
}

function ZaposleniciDelete(idZaposlenik: number) {
    console.log("Odkomentiraj funkciju");
    /*
    $.get("api/zaposlenici/remove/" + idZaposlenik,
        function () {
           ZaposleniciGet();
        },
    )
    */
}

function ZaposleniciProvjeriFormu() {
    if ($("#modal").isValid()) {
        $.post("api/event/add",
            {
                Name: $("#_name").val(),
                Description: $("#_surname").val(),
                Id_category: $("#odjel_id_add").val(),
            }, function () {
                ZaposleniciGet();
            }
        )

        alert("SPREMLJENO!");
        closeActiveModals();
    }
}

function ZaposleniciProvjeriFormu_alter() {
    if ($("#modal_alter").isValid()) {
        $.post("api/event/update",
            {
                id: $("#idHolder").val(),
                Name: $("#alt_name").val(),
                Description: $("#alt_surname").val(),
                Id_category: $("#odjel_id_alter").val(),
            }, function () {
                ZaposleniciGet();
            }

        )

        alert("Podaci Izmijenjeni!");
        closeActiveModals();
    }
}

function closeActiveModals() {
    $("body").find("div[role=dialog].in").first().modal("hide");
}

function progress(data): string {
    let izvrseni = null;

    let ukupni = null;

    return '78879';
}