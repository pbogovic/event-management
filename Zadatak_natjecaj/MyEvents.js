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
    $.post("api/tasks/alterTasks", { zadaci: mojiTaskovi });
    closeActiveModal();
    //alert(JSON.stringify(mojiTaskovi));
}
function StvoriKartice() {
    $.getJSON("api/events/listall", function (data) {
        $("#galerija").empty();
        console.log(JSON.stringify(data));
        $.each(data, function (key, val) {
            var element = $("#patrikovTemplate").html()
                .replace("[ID]", val.Id.toString())
                .replace("[NAZIV]", val.Name)
                .replace("[KATEGORIJA]", val.category_name)
                .replace("[COVER_IMAGE]", val.category_img)
                .replace("[KATEGORIJA_NAZIV]", val.category_name);
            $("#galerija").append(element);
        });
    });
}
function getTasks(idEvent) {
    $("#tasks").empty();
    $("#tasks_idHolder").val(idEvent);
    $("#new_task").val("");
    $.getJSON("api/getTasks/" + idEvent, function (data) {
        $.each(data, function (key, val) {
            var redak = '<span ident = "0" ><input data-rbr="' + val.Id + '" id_zaposlenik= "' + idEvent + '" type ="checkbox" ' + isChecked(val.IsComplete) + '/>' + ' ' + val.Name + '<br/><br/></span>';
            $("#tasks").append(redak);
        });
        $("#modalTasks").modal();
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
    var taskObject = {};
    taskObject.Name = $("#new_task").val();
    taskObject.Id_Event = $("#tasks_idHolder").val();
    $.post("/api/tasks/add", taskObject, function (data) {
        getTasks(taskObject.Id_Event);
    });
}
function closeActiveModal() {
    $("body").find("div[role=dialog].in").first().modal("hide");
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
    $.getJSON("api/category", function (data) {
        $.each(data, function (key, val) {
            var opcija = "<option value='" + val.Name + "'>" + val.Name + "</option>";
            var opcija2 = "<option value='" + val.Name + "'>" + val.Name + "</option>";
            $("#odjel_id_add").append(opcija);
            $("#odjel_id_alter").append(opcija);
            $("#odjel_id_filter").append(opcija2);
        });
    });
    StvoriKartice();
});
//# sourceMappingURL=MyEvents.js.map