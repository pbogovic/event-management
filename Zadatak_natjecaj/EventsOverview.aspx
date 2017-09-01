<%@ Page Title="" Language="C#" MasterPageFile="~/Content/SiteMaster.Master" AutoEventWireup="true" CodeBehind="EventsOverview.aspx.cs" Inherits="EManagement.administracijaZaposlenikaM" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentHead" runat="server">

    <script src="EventsOverview.js"></script>

    <style>
    </style>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">

    <section id="services">
        <div class="container">
            <div class="row text-center">
                <h1>Administracija Zaposlenika</h1>
            </div>
            <div class="row">
                <table id="tableZaposlenici" class="display">
                </table>
            </div>
            <div>
                <div id="bottom" class="row">
                    <input id="dodaj" type="button" value="Dodaj zaposlenika" class="btn-default btn-lg" />
                </div>
            </div>
        </div>
    </section>
    <div class="modal fade" id="modal" role="dialog">
        <div id="modalHead" class="modal-dialog">
            <div class=" modal-content">
                <div class="modal-header">
                    <h3>Dodaj zaposlenika</h3>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="modal_formGroup">
                            <label class="col-sm-4 control-label" for="_name">Ime</label>
                            <div class="col-sm-8">
                                <input data-validation="required" id="_name" type="text" class="modal_form" maxlength="30" />
                            </div>
                        </div>
                        <div class="modal_formGroup">
                            <label class="col-sm-4 control-label" for="_surname">Prezime</label>
                            <div class="col-sm-8">
                                <input data-validation="required" id="_surname" type="text" class="modal_form" maxlength="30" />
                            </div>
                        </div>

                        <div class="modal_formGroup">
                            <label class="col-sm-4 control-label" for="odjel_id_add">Odjel</label>
                            <div class="col-sm-8">
                                <select id="odjel_id_add" class="modal_form">
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">

                    <button type="button" class="btn-default btn-lg" onclick="ZaposleniciProvjeriFormu(); return false;"><span><i class="fa fa-check"></i>Spremi </span></button>

                    <button type="button" class="btn-default btn-lg" onclick="closeActiveModals(); return false;"><span><i class="fa fa-remove"></i>Zatvori</span>  </button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modal_alter" role="dialog">

        <div id="modalHead_alt" class="modal-dialog">

            <div class=" modal-content">

                <div class="modal-header">

                    <h3>Izmijeni zaposlenika</h3>
                </div>

                <div class="modal-body">

                    <div class="container">

                        <input type="text" id="idHolder" hidden />

                        <div class="modal_formGroup">
                            <label class="col-sm-4 control-label" for="_name">Ime</label>

                            <div class="col-sm-8">
                                <input data-validation="required" id="alt_name" type="text" class="modal_form" maxlength="30" />
                            </div>
                        </div>

                        <div class="modal_formGroup">
                            <label class="col-sm-4 control-label" for="_surname">Prezime</label>

                            <div class="col-sm-8">
                                <input data-validation="required" id="alt_surname" type="text" class="modal_form" maxlength="30" />
                            </div>
                        </div>

                        <div class="modal_formGroup">
                            <label class="col-sm-4 control-label" for="odjel_id_alter">Odjel</label>

                            <div class="col-sm-8">
                                <select id="odjel_id_alter" class="modal_form">
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">

                    <!--  <input id="modal_alter_submit" class="btn-default btn-lg" type="submit" value="Spremi" onclick="Zaposlenici_ProvjeriFormu_alter(); return false;" />
                   -->
                    <button type="button" class="btn-default btn-lg" onclick="ZaposleniciProvjeriFormu_alter(); return false;"><span><i class="fa fa-check"></i>Spremi </span></button>

                    <!-- <input class="btn-default btn-lg" type="submit" value="Zatvori" onclick="closeActiveModal(); return false;" /> -->
                    <button type="button" class="btn-default btn-lg" onclick="closeActiveModals(); return false;"><span><i class="fa fa-remove"></i>Zatvori</span>  </button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>