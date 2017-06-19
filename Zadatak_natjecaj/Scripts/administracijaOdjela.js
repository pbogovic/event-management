var tableRef = null;
$(function () {
    tableRef = $("#tableOdjeli").DataTable({
        data: [],
        columns: [
            { data: 'odjel_naziv', title: "Naziv" },
            { data: 'odjel_id', title: 'Mijenjaj', render: function (data) { return "<input type ='button' value='Promijeni' onclick='getByid(" + data + ")' >"; } },
            { data: 'odjel_id', title: "Brisi", render: function (data) { return "<input type='button' value ='Brisi' onclick='deleteEmployee(" + data + ")'>"; } }
        ]
    });
    console.log("Tablica" + tableRef);
    $("#odjel_id_filter").on("change", function () {
        console.log($("#odjel_id_filter").val());
        tableRef.search($("#odjel_id_filter").val());
        tableRef.draw();
    });
    $("#dodaj").click(function () {
        $("#modal").find("input[type=text]").val("");
        $("#modal").modal();
    });
    $("#izmjeni").click(function () {
        $("#modal_alter").modal();
        $("#modal_alter").find("input[type=text]").val("");
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
    getOdjeli();
});
function getOdjeli() {
    $.getJSON("api/zaposlenici/listOdjel", function (data) {
        tableRef.clear();
        tableRef.rows.add(data);
        tableRef.draw();
    });
}
function getOdjelByid(idOdjel) {
    $.getJSON("api/zaposlenici/listOdjel/" + idOdjel, function (data) {
        console.log(data);
        $("#modal_alter").modal();
        $("#alt_odjelNaziv").val(data.odjel_naziv);
        $("#idHolder").val(data.odjel_id);
    });
}
function deleteOdjel(idZaposlenik) {
    console.log("Poziv funkcije");
    $.post("api/zaposlenici/remove", {
        id: idZaposlenik
    }, function () {
        getZaposlenici();
    });
}
function OdjelProvjeriFormu() {
    if ($("#modal").isValid()) {
        $.post("api/odjeli/add", {
            odjel_naziv: $("#_odjelNaziv").val()
        }, function () {
            getZaposlenici();
        });
        console.log("User data sent");
        alert("SPREMLJENO!");
        closeActiveModal();
    }
}
function OdjelProvjeriFormu_alter() {
    if ($("#modal_alter").isValid()) {
        $.post("api/odjeli/update", {
            odjel_id: $("#idHolder").val(),
            odjel_naziv: $("#alt_odjelNaziv").val()
        }, function () {
            getOdjeli();
        });
        console.log($("#alt_surname").val());
        console.log("Alter data sent");
        alert("Podaci Izmijenjeni!");
        closeActiveModal();
    }
}
//# sourceMappingURL=administracijaOdjela.js.map