declare function require(path: string): any;
declare function Chart(ctx: any, options: any): void;

var tableRef = null;

let pieGrafLabels = [];

let pieGrafData = [];

let pieGrafColors = ["0F434F", "447884"];

let chartGrafLabels = [];

let chartGrafData = [];

let chartGrafColors = "0F434F";

let ctx = null;
let chart = null;

var ctx2 = null;
var chart2 = null;

$(function () {
    tableRef = $("#tableOdjeli").DataTable({
        data: [],
        columns: [
            { data: 'Name', width: "600px", title: "Naziv" },
            { data: 'Id', width: "80px", title: 'Mijenjaj', render: function (data) { return "<input type ='button' value='Promijeni' onclick='getCategory(" + data + ")' >" } },
            { data: 'Id', width: "80px", title: "Brisi", render: function (data) { return "<input type='button' value ='Brisi' onclick='deleteEmployee(" + data + ")'>" } }

        ]
    });

    console.log("Tablica" + tableRef);

    $("#odjel_id_filter").on("change", function () {
        console.log($("#odjel_id_filter").val());
        tableRef.search($("#odjel_id_filter").val());
        tableRef.draw();
    })

    $("#dodaj").click(function () {
        $("#modal").find("input[type=text]").val("");
        $("#modal").modal();
    })

    $("#izmjeni").click(function () {
        $("#modal_alter").modal();
        $("#modal_alter").find("input[type=text]").val("");
    })

    $.getJSON("api/category", function (data) {
        $.each(data, function (key, val) {
            var opcija = "<option value='" + val.odjel_id + "'>" + val.odjel_naziv + "</option>"
            var opcija2 = "<option value='" + val.odjel_naziv + "'>" + val.odjel_naziv + "</option>"

            $("#odjel_id_add").append(opcija);
            $("#odjel_id_alter").append(opcija);
            $("#odjel_id_filter").append(opcija2);
        })
    })

    getOdjeli();

    $.getJSON("api/izvjestaj/eventsbycategory", function (data: Models.EventsByCategories[]) {
        data.forEach((value) => {
            pieGrafData.push(value.number);

            pieGrafLabels.push(value.Name);
        })
    })

    console.log(pieGrafLabels.toString() + "\n" + pieGrafData.toString() + "\n" + pieGrafColors.toString());

    ctx = document.getElementById('myChart') as HTMLCanvasElement;
    ctx = ctx.getContext('2d');

    chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
            labels: pieGrafLabels,
            datasets: [{
                label: "My Prvi dataset",
                backgroundColor: ['rgb(15, 67, 79)', 'rgb(107, 148, 158)'],
                borderColor: 'rgb(255, 99, 132)',
                data: pieGrafData
            }]
        },

        // Configuration options go here
        options: {
            layout: {
                padding: {
                    left: 15,
                    right: 15,
                    top: 15,
                    bottom: 15
                }
            },

            title: {
                text: "Događaji po kategorijama",
                display: true,
            },

            responsive: true,

            maintainAspectRatio: false,
        }
    });
});

function getOdjeli() {
    $.getJSON("api/category", function (data) {
        tableRef.clear();
        tableRef.rows.add(data);
        tableRef.draw();

        $('[data-toggle="tooltip"]').tooltip();
    })
}

function getCategory(idOdjel: number) {
    $.getJSON("api/category/" + idOdjel, function (data: Models.Category) {
        console.log(data);

        $("#modal_alter").modal();

        $("#alt_odjelNaziv").val(data.Name);

        $("#idHolder").val(data.Id);
    })
}

function deleteOdjel(idZaposlenik) {
    console.log("Poziv funkcije");

    $.post("api/zaposlenici/remove",
        {
            id: idZaposlenik
        },
        function () {
            getOdjeli();
        }
    )
}

function OdjelProvjeriFormu() {
    if ($("#modal").isValid()) {
        $.post("api/category",
            {
                Name: $("#_odjelNaziv").val()
            }, function () {
                getOdjeli();
            }

        )
        console.log("User data sent");
        alert("SPREMLJENO!");
        closeActiveModal();
    }
}

function OdjelProvjeriFormu_alter() {
    if ($("#modal_alter").isValid()) {
        $.post("api/category/update",
            {
                Id: $("#idHolder").val(),
                Name: $("#alt_odjelNaziv").val()
            }, function () {
                getOdjeli();
            }

        )

        console.log($("#alt_surname").val());
        console.log("Alter data sent");
        alert("Podaci Izmijenjeni!");
        closeActiveModal();
    }
}

function pBar_obradi_odjeli(rjeseni: number, ukupni: number): string {
    if (ukupni == 0) {
        var html = "<span style = 'text-align: left;'> Nema zadatka </span> ";
        return html;
    }

    if (rjeseni == 0) {
        var html = "<div class = 'row' make='1'><div class = 'pBarRed col-lg-8' data-toggle = 'tooltip' title= '" + rjeseni + "/" + ukupni + "'> </div>  <div class = 'col-lg-4'></div> </div> ";
        return html;
    }

    else {
        var postotak = (rjeseni / ukupni) * 100;

        html = "<div class='row' make='1' ><div class = 'pBarRed col-lg-8' data-toggle = 'tooltip' title= '" + rjeseni + "/" + ukupni + "'> <div class = 'pBarGreen'  style = 'width: " + postotak + "%';> </div> </div> <div class = 'col-lg-4'></div></div>"
        return html;
    }
}