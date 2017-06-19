<%@ Page Title="" Language="C#" MasterPageFile="~/Content/SiteMaster.Master" AutoEventWireup="true" CodeBehind="zaposlenici.aspx.cs" Inherits="Zadatak_natjecaj.zaposleniciM" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentHead" runat="server">
    <script src="../Scripts/zaposlenici.js"></script>

    <style>
        .team {
            margin: 0;
        }




        .custom {
            padding-left: 40px;
        }

        .add_icon {
            min-height: 128px;
            min-width: 128px;
            background: url('..\Images\plus_icon.png')
        }

        .linkify:hover {
            cursor: pointer;
        }
    </style>



    <title>Zadatak</title>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">

    <div id="services">
        <div class="container">

            <div class="row text-center title">

                <h1>Pregled zaposlenika</h1>

            </div>

            <div class="row">
                <div class="dropdown">
                    <label for="odjel_id_filter">Odjel</label>
                    <select id="odjel_id_filter" class="modal_form_small" required="true">

                        <option value="">All</option>

                    </select>
                </div>
            </div>



        </div>
    </div>


    <section id="portfolio">

        <div class="container">
            <div class="row" id="galerija">
            </div>
        </div>


    </section>






    <div class="modal fade" id="modalTasks" role="dialog">

        <div class="modal-dialog">

            <div class=" modal-content">

                <div class="modal-header">

                    <h3>Zadaci</h3>

                </div>

                <form id="modal_tasks" target="">

                    <div class="modal-body">

                        <div class="container custom">

                            <input type="text" id="tasks_idHolder" hidden />

                            <div class="row" id="tasks">
                            </div>

                            <div class="row">
                                <span>
                                    <input id="new_task" type="text" maxlength="50" />

                                    <span class="fa fa-plus-circle fa-lg" onclick="addTask()"></span>
                                    <!-- 
                                        <img class="linkify" height="25" width="25" src="Images/plus_icon.png" onclick="addTask()" /></span>
                                            -->


                                </span>
                            </div>

                        </div>

                    </div>

                    <div class="modal-footer">

                        <!--
                        <input id="modal_tasks_button" class="btn-default btn-lg" type="submit" value="Spremi zadatke" onclick="provjeriTaskove(); return false;" />
                      -->

                        <button type="button" class="btn-default btn-lg" onclick="provjeriTaskove(); return false;"><span><i class="fa fa-check"></i>   Spremi zadatke </span></button>

                        <button type="button" class="btn-default btn-lg" onclick="closeActiveModal(); return false;"><span><i class="fa fa-remove"></i>   Zatvori</span>  </button>

                    </div>
                </form>
            </div>
        </div>
    </div>





    <div class="modal fade" id="bCard_modal">
        <div class="modal-dialog">

            <div class=" modal-content">

                <div class="modal-header alert-success">

                    <h3>Business Card</h3>

                </div>


                <div class="modal-body">

                    <center>
                            [Ime]  [Prezime]
                        </center>

                    <center>
                            Ljorem ipsum
                        </center>
                </div>


                <div class="modal-footer">

                    <button type="button" class="btn-default btn-lg" onclick="closeActiveModal(); return false;"><span><i class="fa fa-remove"></i>Zatvori</span>  </button>
                </div>

            </div>
        </div>
    </div>


    <div id="patrikovTemplate" style="display: none">
        <div data-odjel="[ODJEL]" class="col-lg-3 col-md-4 col-sm-6 col-xs-12 portfolio-item">
            <div class="team text-center">
                <div class="cover" style="background: url('[COVER_IMAGE]'); background-size: cover; min-height: 240px;"></div>
                <img src="[EMPLOYEE_IMAGE]" class="avatar" />
                <div class="title">
                    <h4>[NAME_AND_SURNAME]</h4>
                    <h5 class="muted regular">[ODJEL_NAZIV]</h5>
                </div>
                <a class="btn btn-blue-fill ripple" onclick="getTasks([ID])">Zadaci</a>
            </div>
        </div>
    </div>


</asp:Content>
