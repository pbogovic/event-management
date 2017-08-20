

declare function require(path: string): any;


var tableRef = null;


$(function () {
    tableRef = $("#tableOdjeli").DataTable({
        data: [],
        columns: [
            { data: 'odjel_naziv', title: "Naziv" },
            {
                data: 'zadaci', title: 'Zadaci', render: function (data) {

                    console.log(data);

                    var mojString: string = data;

                    var subovi = mojString.split("/");

                    var rjeseni: number = parseInt(subovi[0].trim());

                    var ukupni: number = parseInt(subovi[1].trim());


                    return pBar_obradi_odjeli(rjeseni, ukupni);


                }
            },
            { data: 'odjel_id', title: 'Mijenjaj', render: function (data) { return "<input type ='button' value='Promijeni' onclick='getByid(" + data + ")' >" } },
            { data: 'odjel_id', title: "Brisi", render: function (data) { return "<input type='button' value ='Brisi' onclick='deleteEmployee(" + data + ")'>" } }


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

    $.getJSON("api/zaposlenici/listOdjel", function (data) {

        $.each(data, function (key, val) {

            var opcija = "<option value='" + val.odjel_id + "'>" + val.odjel_naziv + "</option>"
            var opcija2 = "<option value='" + val.odjel_naziv + "'>" + val.odjel_naziv + "</option>"

            $("#odjel_id_add").append(opcija);
            $("#odjel_id_alter").append(opcija);
            $("#odjel_id_filter").append(opcija2);

        })
    })
    
    getOdjeli();
})

function getOdjeli() {

    $.getJSON("api/zaposlenici/listOdjelWithInfo", function (data) {
               
        tableRef.clear();
        tableRef.rows.add(data);
        tableRef.draw();

        $('[data-toggle="tooltip"]').tooltip(); 
       

       

    })
}


function getOdjelByid(idOdjel : number) {

    $.getJSON("api/zaposlenici/listOdjel/" + idOdjel, function (data) {

        console.log(data);

        $("#modal_alter").modal();

        $("#alt_odjelNaziv").val(data.odjel_naziv);

        $("#idHolder").val(data.odjel_id);



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

        $.post("api/odjeli/add",
            {
                odjel_naziv: $("#_odjelNaziv").val()


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

        $.post("api/odjeli/update",
            {
                odjel_id: $("#idHolder").val(),
                odjel_naziv: $("#alt_odjelNaziv").val()

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


        var html = "<div class = 'row' make='1'><div class = 'pBarRed col-lg-8' data-toggle = 'tooltip' title= '" + rjeseni + "/" + ukupni +"'> </div>  <div class = 'col-lg-4'></div> </div> ";
        return html;

    }

    else {

        var postotak = (rjeseni / ukupni) * 100;

        html = "<div class='row' make='1' ><div class = 'pBarRed col-lg-8' data-toggle = 'tooltip' title= '" + rjeseni + "/" + ukupni +"'> <div class = 'pBarGreen'  style = 'width: " + postotak + "%';> </div> </div> <div class = 'col-lg-4'></div></div>"
        return html;
    }

}

