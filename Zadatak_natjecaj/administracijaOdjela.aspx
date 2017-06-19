<%@ Page Title="" Language="C#" MasterPageFile="~/Content/SiteMaster.Master" AutoEventWireup="true" CodeBehind="administracijaOdjela.aspx.cs" Inherits="Zadatak_natjecaj.administracijaOdjela" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentHead" runat="server">

    <script src="Scripts/administracijaOdjela.js"></script>

    <style>
       
    </style>

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">




    <section id="services">

        <div class="container">

            <div class="row text-center">

                <h1>Administracija odjela</h1>

            </div>




            <div class="row">

                            
                <table id="tableOdjeli" class="display">
                </table>

            </div>


            <div>
                <div id="bottom" class="row">

                    <input id="dodaj" type="button" value="Dodaj odjel" class="btn-default btn-lg" />

                </div>
            </div>

        </div>

    </section>



    <div class="modal fade" id="modal" role="dialog">

        <div id="modalHead" class="modal-dialog">

            <div class=" modal-content">

                <div class="modal-header">

                    <h3>Dodavanje odjela</h3>

                </div>


               

                    <div class="modal-body">

                        <div class="container">


                        <div class="modal_formGroup">
                            <label class="col-sm-4 control-label" for="_odjelNaziv">Naziv odjela</label>
                            <div class="col-sm-8">
                            <input data-validation="required" id="_odjelNaziv" type="text" class="modal_form"  maxlength="50" />
                            </div>

                            </div>

                            </div>

                    </div>

                    <div class="modal-footer">

                        <button  type="button" class="btn-default btn-lg" onclick="OdjelProvjeriFormu(); return false;"><span><i class="fa fa-check"></i>   Spremi </span>  </button>
                     
                        <button  type="button" class="btn-default btn-lg" onclick="closeActiveModal(); return false;"><span><i class="fa fa-remove"></i>   Zatvori</span>  </button>
                    


                    </div>
               

            </div>

        </div>

    </div>


    <div class="modal fade" id="modal_alter" role="dialog">

        <div id="modalHead_alt" class="modal-dialog">

            <div class=" modal-content">

                <div class="modal-header">

                    <h3>Mijenjanje odjela</h3>

                </div>

               

                    <div class="modal-body">

                        <div class ="container">

                        <input type="text" id="idHolder" hidden />

                        <div class="modal_formGroup">

                            <label class="col-sm-4 control-label" for="alt_odjelNaziv">Name</label></div>

                        <div class ="col-sm-8">
                            <input data-validation="required" id="alt_odjelNaziv" type="text" class="modal_form"  maxlength="50" />
                        </div>
                         </div>
                        </div>
                   

                    <div class="modal-footer">

                        <button  type="button" class="btn-default btn-lg" onclick="OdjelProvjeriFormu_alter(); return false;"><span><i class="fa fa-check"></i>   Spremi </span>  </button>
                    <button  type="button" class="btn-default btn-lg" onclick="closeActiveModal(); return false;"><span><i class="fa fa-remove"></i>   Zatvori</span>  </button>
                    

                    </div>
               

            </div>
        </div>
    </div>







</asp:Content>
