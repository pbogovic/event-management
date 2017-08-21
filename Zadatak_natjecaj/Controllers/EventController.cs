using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Zadatak_natjecaj.Models.Zavrsni;

namespace Zadatak_natjecaj.Controllers
{
    public class EventController : ApiController
    {
        public SqlConnection myConnection = new SqlConnection("Server=tcp:sqlserver-fat-we.database.windows.net,1433;Initial Catalog=patrikdemobase;Persist Security Info=False;User ID=EventProtectFATAdmin;Password=Goldenfazha1!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

        [Route("api/events/listall")]
        public IEnumerable<Event> GetAll()
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.Query<Event>("[dbo].[PROMIJENI]", new { }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [Route("api/Events/listall")]
        public Event Get(int id)
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.QueryFirstOrDefault<Event>("[dbo].[zaposlenici_byId]", new { param1 = id }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [Route("api/Category/listCategory")]
        public IEnumerable<Category> Get_Category()
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.Query<Category>("[dbo].[PROMIJENI]", new { }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [Route("api/Category/{odjel_id}")]
        public Category Get_CategoryByID(int category_id)
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.QueryFirstOrDefault<Category>("[dbo].[PROMIJENI]", new { param1 = category_id }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [Route("api/getTasks/{event_id}")]
        public IEnumerable<Task> getTasks(int event_id)
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.Query<Task>("[dbo].[PROMIJENI]", new { param1 = event_id }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        // -------------------------------------------------------------------------------------------------------------------------------

        [Route("api/Event/add")]
        [HttpPost]
        public void post(Event Event)
        {
            try
            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[insertEvent]", new { param1 = Event.Name, param2 = Event.Description, param3 = Event.Id_category }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [Route("api/Event/update")]
        [HttpPost]
        public void update(Event Event)
        {
            try

            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[zaposlenici_update]", new { param1 = Event.Id, param2 = Event.Name, param3 = Event.Description, param4 = Event.Id_category }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw;
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
                throw;
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
                throw;
            }
        }

        [Route("api/tasks/add")]
        [HttpPost]
        public void tasks_add(Task task)
        {
            try

            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[tasks_add]", new { param1 = task.Id_Event, param2 = task.Name }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [Route("api/tasks/alterTasks")]
        [HttpPost]
        public void alterTasks(TaskList taskovi)
        {
            try
            {
                using (myConnection)
                {
                    foreach (Task t in taskovi.zadaci)
                    {
                        myConnection.Execute("[dbo].[tasks_update]", new { param1 = t.Id_Event, param2 = t.Rbr, param3 = t.IsComplete }, commandType: System.Data.CommandType.StoredProcedure);
                    }
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }

    public class TaskList
    {
        public List<Task> zadaci { get; set; }
    }
}