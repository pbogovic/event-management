<%@ Page Title="" Language="C#" MasterPageFile="~/Content/SiteMaster.Master" AutoEventWireup="true" CodeBehind="Reports.aspx.cs" Inherits="Zadatak_natjecaj.Izvjestaj" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentBody" runat="server">

    <div id="services">
        <div id="container">
            <div class="row">
                <div class="cContain col-lg-6">
                    <canvas id="myChart" class="cArea"></canvas>
                </div>

                <div class="cContain col-lg-6">
                    <canvas id="myChart2" class="cArea"></canvas>
                </div>
            </div>
        </div>
    </div>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentHead" runat="server">

    <script src="Reports.js"></script>
</asp:Content>