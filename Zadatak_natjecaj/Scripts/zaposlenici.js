function getZaposlenici() {
}
function provjeriTaskove() {
    var mojiTaskovi = [];
    $("#tasks").find("input[data-rbr]").each(function (index, elem) {
        console.log("Ušo u petlju");
        console.log(elem.getAttribute("data-rbr"));
        console.log($(elem).prop("checked"));
        console.log(elem.getAttribute("id_zaposlenik"));
        mojiTaskovi.push({ "rbr": elem.getAttribute("data-rbr"), "id_zaposlenik": elem.getAttribute("id_Zaposlenik"), "isComplete": $(elem).prop("checked") });
    });
    //console.log(JSON.stringify(mojiTaskovi));ž
    $.post("api/zaposlenici/alterTasks", { zadaci: mojiTaskovi });
    closeActiveModal();
    //alert(JSON.stringify(mojiTaskovi));
}
function StvoriKartice() {
    $.getJSON("api/zaposlenici/listall", function (data) {
        $("#galerija").empty();
        $.each(data, function (key, val) {
            var element = $("#patrikovTemplate").html()
                .replace("[ID]", val.Id)
                .replace("[NAME_AND_SURNAME]", val.name + ' ' + val.surname)
                .replace("[ODJEL_NAZIV]", val.odjel_naziv)
                .replace("[COVER_IMAGE]", val.img_url)
                .replace("[EMPLOYEE_IMAGE]", val.zaposlenik_img)
                .replace("[ODJEL]", val.odjel_naziv);
            $("#galerija").append(element);
        });
    });
}
function closeActiveModal() {
    $("body").find("div[role=dialog].in").first().modal("hide");
}
function getTasks(id_Zaposlenik) {
    $("#tasks").empty();
    $("#tasks_idHolder").val(id_Zaposlenik);
    $("#new_task").val("");
    $.getJSON("api/zaposlenici/getTasks/" + id_Zaposlenik, function (data) {
        $.each(data, function (key, val) {
            var redak = '<span ident = "0" ><input data-rbr="' + val.rbr + '" id_zaposlenik= "' + id_Zaposlenik + '" type ="checkbox" ' + isChecked(val.isComplete) + '/>' + ' ' + val.zadatak_naslov + '<br/><br/></span>';
            $("#tasks").append(redak);
        });
        /*

        $("#modalTasks").on("shown.bs.modal", function (data) {

            $("#modalTasks").find("span[ident]").fadeIn(500);


        })

        $("#modalTasks").find("span[ident]").hide();

        */
        $("#modalTasks").modal();
        //$("#modalTasks").find("span").con
    }, function (data) { alert("Nesto je poslo po zlu"); console.log(data); });
}
function isChecked(data) {
    if (data == 0)
        return "";
    else
        return "checked";
}
function alterTasks() {
    var djeca = $("tasks").children();
    console.log($("tasks").children());
}
function addTask() {
    var task = $("#new_task").val();
    var idZ = $("#tasks_idHolder").val();
    $.post("/api/tasks/add", {
        id_zaposlenik: idZ,
        zadatak_naslov: task
    }, function (data) {
        getTasks(idZ);
    });
}
$(function () {
    $("#_dob").datepicker({ dateFormat: "yy-mm-dd" });
    $("#alt_dob").datepicker({ dateFormat: "yy-mm-dd" });
    $("#odjel_id_filter").on("change", function () {
        console.log($("#odjel_id_filter").val());
        //tableRef.search($("#odjel_id_filter").val());
        // tableRef.columns(4).search($("#odjel_id_filter").val());
        //tableRef.draw();
        var odjel = $("#odjel_id_filter").val();
        if (odjel == "") {
            $("#galerija").find("div[data-odjel]:hidden").fadeIn(500);
        }
        else {
            $("#galerija").find("div[data-odjel]:visible").fadeOut(500, function () {
                $("#galerija").find("div[data-odjel = " + odjel + " ]").fadeIn(500);
            });
        }
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
    getZaposlenici();
});
//# sourceMappingURL=zaposlenici.js.map