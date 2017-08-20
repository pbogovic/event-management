var tableRef = null;
$(function () {
    tableRef = $("#tableZaposlenici").DataTable({
        data: [],
        columns: [
            { data: 'name', title: "Ime" },
            { data: 'surname', title: "Prezime" },
            { data: 'birthDate', title: "Datum rođenja", render: function (data) { return (new Date(data)).toLocaleDateString(); } },
            { data: 'odjel_naziv', title: "Odjel" },
            { data: 'placa', title: "Placa" },
            {
                data: "zadaci", title: "Zadaci", render: function (data) {
                    var mojString = data;
                    var subovi = mojString.split("/");
                    var rjeseni = parseInt(subovi[0].trim());
                    var ukupni = parseInt(subovi[1].trim());
                    return pBar_obradi(rjeseni, ukupni);
                }
            },
            { data: 'Id', title: 'Mijenjaj', render: function (data) { return "<input type ='button' value='Promijeni' onclick='ZaposleniciGetByid(" + data + ")' >"; } },
            { data: 'Id', title: "Brisi", render: function (data) { return "<input type='button' value ='Brisi' onclick='ZaposleniciDelete(" + data + ")'>"; } }
        ]
    });
    $("#_dob").datepicker({ dateFormat: "yy-mm-dd" });
    $("#alt_dob").datepicker({ dateFormat: "yy-mm-dd" });
    $("#odjel_id_filter").on("change", function () {
        tableRef.search($("#odjel_id_filter").val());
        tableRef.draw();
    });
    $("#dodaj").click(function () {
        $("#modal").modal();
        $("#modal").find("input[type=text]").val("");
    });
    $("#izmjeni").click(function () {
        $("#modal").modal();
        $("#modal_form").find("input[type=text]").val("");
    });
    $.getJSON("api/zaposlenici/listOdjel", function (data) {
        $.each(data, function (key, val) {
            var opcija = "<option value='" + val.odjel_id + "'>" + val.odjel_naziv + "</option>";
            var opcija2 = "<option value='" + val.odjel_naziv + "'>" + val.odjel_naziv + "</option>";
            $("#odjel_id_add").append(opcija);
            $("#odjel_id_alter").append(opcija);
            $("#odjel_id_filter").append(opcija2);
        });
    });
    ZaposleniciGet();
});
function ZaposleniciGet() {
    $.getJSON("api/zaposlenici/listall", function (data) {
        tableRef.clear();
        tableRef.rows.add(data);
        tableRef.draw();
        $('[data-toggle="tooltip"]').tooltip();
    });
}
function ZaposleniciGetByid(idZaposlenik) {
    $.getJSON("api/zaposlenik/" + idZaposlenik, function (data) {
        $("#modal_alter").modal();
        $("#alt_name").val(data.name);
        $("#alt_surname").val(data.surname);
        $("#idHolder").val(data.Id);
        $("#alt_dob").datepicker("setDate", new Date(data.birthDate));
        $("#odjel_id_alter").val(data.odjel_id);
        $("#placa_alter").val(data.placa);
    });
}
function ZaposleniciDelete(idZaposlenik) {
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
        $.post("api/zaposlenici/add", {
            name: $("#_name").val(),
            surname: $("#_surname").val(),
            birthDate: $("#_dob").val(),
            odjel_id: $("#odjel_id_add").val(),
            placa: $("#placa_add").val()
        }, function () {
            ZaposleniciGet();
        });
        alert("SPREMLJENO!");
        closeActiveModals();
    }
}
function ZaposleniciProvjeriFormu_alter() {
    if ($("#modal_alter").isValid()) {
        $.post("api/zaposlenici/update", {
            id: $("#idHolder").val(),
            name: $("#alt_name").val(),
            surname: $("#alt_surname").val(),
            birthDate: $("#alt_dob").val(),
            odjel_id: $("#odjel_id_alter").val(),
            placa: $("#placa_alter").val()
        }, function () {
            ZaposleniciGet();
        });
        alert("Podaci Izmijenjeni!");
        closeActiveModals();
    }
}
function closeActiveModals() {
    $("body").find("div[role=dialog].in").first().modal("hide");
}
function progress(data) {
    var izvrseni = null;
    var ukupni = null;
    return '78879';
}
function pBar_obradi(rjeseni, ukupni) {
    if (ukupni == 0) {
        var html = "<span> Nema zadatka </span> ";
        return html;
    }
    if (rjeseni == 0) {
        var html = "<div class = 'row'  make='1' ><div class = 'pBarRed col-lg-8' data-toggle = 'tooltip'    title = '" + rjeseni + "/" + ukupni + "'> </div>  <div class = 'col-lg-4'> </div> </div> ";
        return html;
    }
    else {
        var postotak = (rjeseni / ukupni) * 100;
        html = "<div class='row' make='1' ><div class = 'pBarRed col-lg-8'  data-toggle = 'tooltip' title= '" + rjeseni + "/" + ukupni + "'> <div class = 'pBarGreen'  style = 'width: " + postotak + "%';> </div> </div> <div class = 'col-lg-4 title'></div></div>";
        return html;
    }
}
//# sourceMappingURL=AdministracijaZaposlenici.js.map