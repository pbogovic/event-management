using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using Dapper;
using Zadatak_natjecaj.Models;

namespace Zadatak_natjecaj
{
    public class zaposlenikController : ApiController
    {
        public SqlConnection myConnection = new SqlConnection("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=em-Master;Integrated Security=True;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

        // GET api/<controller>
        [Route("api/zaposlenici/listall")]
        public IEnumerable<Zaposlenik> Get()
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.Query<Zaposlenik>("[dbo].[zaposlenici_ListAll]", new { }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Zaposlenik Get(int id)
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.QueryFirstOrDefault<Zaposlenik>("[dbo].[zaposlenici_byId]", new { param1 = id }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/zaposlenici/listOdjel")]
        public IEnumerable<Odjel> Get_odjeli()
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.Query<Odjel>("[dbo].[odjeli_listAll]", new { }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/zaposlenici/listOdjelWithInfo")]
        public IEnumerable<Odjel> Get_odjeliWithInfo()
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.Query<Odjel>("[dbo].[odjeli_listAllWithInfo]", new { }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/zaposlenici/listOdjel/{odjel_id}")]
        public Odjel Get_odjeliByID(int odjel_id)
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.QueryFirstOrDefault<Odjel>("[dbo].[odjeli_byID]", new { param1 = odjel_id }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/zaposlenici/getTasks/{zaposlenik_id}")]
        public IEnumerable<Tasks> getTasks(int zaposlenik_id)
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.Query<Tasks>("[dbo].[zaposlenici_listTasks]", new { param1 = zaposlenik_id }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/izvjestaj/zapByOdjel")]
        [HttpGet]
        public IEnumerable<ZapByOdjel> zapByOdjel()
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.Query<ZapByOdjel>("[dbo].[izvjestaj.zapByOdjel]", new { }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/izvjestaj/zapByDoB")]
        [HttpGet]
        public IEnumerable<ZapByDoB> zapByDoB()
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.Query<ZapByDoB>("[dbo].[izvjestaj_zapByDoB]", new { }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/zaposlenici/remove/{id}")]
        [HttpGet]
        public string remove(int id)
        {
            try

            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[zaposlenici_delete]", new { param1 = id }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return "ret message";
        }

        [Route("api/zaposlenici/add")]
        [HttpPost]
        public void post(Zaposlenik zaposlenik)
        {
            try

            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[insertEmployee]", new { param1 = zaposlenik.name, param2 = zaposlenik.surname, param3 = zaposlenik.birthDate, param4 = zaposlenik.odjel_id, param5 = zaposlenik.placa }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/zaposlenici/update")]
        [HttpPost]
        public void update(Zaposlenik zaposlenik)
        {
            try

            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[zaposlenici_update]", new { param1 = zaposlenik.Id, param2 = zaposlenik.name, param3 = zaposlenik.surname, param4 = zaposlenik.birthDate, param5 = zaposlenik.odjel_id, param6 = zaposlenik.placa }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/odjeli/add")]
        [HttpPost]
        public void odjeli_add(Odjel odjel)
        {
            try

            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[odjeli_add]", new { param1 = odjel.odjel_naziv }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/odjeli/update")]
        [HttpPost]
        public void odjeli_update(Odjel odjel)
        {
            try

            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[odjeli_update]", new { param1 = odjel.odjel_id, param2 = odjel.odjel_naziv }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/tasks/add")]
        [HttpPost]
        public void tasks_add(Tasks task)
        {
            try

            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[tasks_add]", new { param1 = task.id_zaposlenik, param2 = task.zadatak_naslov }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/zaposlenici/alterTasks")]
        [HttpPost]
        public void alterTasks(testiramsamo taskovi)
        {
            try
            {
                using (myConnection)
                {
                    foreach (Tasks t in taskovi.zadaci)
                    {
                        myConnection.Execute("[dbo].[tasks_update]", new { param1 = t.id_zaposlenik, param2 = t.rbr, param3 = t.isComplete }, commandType: System.Data.CommandType.StoredProcedure);
                    }
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }

    public class testiramsamo
    {
        public List<Tasks> zadaci { get; set; }
    }
}