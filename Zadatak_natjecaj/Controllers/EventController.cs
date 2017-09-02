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
        public SqlConnection myConnection = new SqlConnection("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=em-Master;Integrated Security=True;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

        [Route("api/events/listall")]
        public IEnumerable<Event> GetAll()
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.Query<Event>("[dbo].[events_getAll]", new { }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/category/update")]
        [HttpPost]
        public void odjeli_update(Category odjel)
        {
            try
            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[categories_update]", new { param1 = odjel.Id, param2 = odjel.Name }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/events/{idEvent}")]
        [HttpGet]
        public Event Get(int idEvent)
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.QueryFirstOrDefault<Event>("[dbo].[events_byId]", new { param1 = idEvent }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [Route("api/category")]
        [HttpPost]
        public void category_add(Category odjel)
        {
            try
            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[categories_add]", new { param1 = odjel.Name }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [Route("api/category")]
        public IEnumerable<Category> Get_All_Categories()
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.Query<Category>("[dbo].[categories_listAll]", new { }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [Route("api/category/{category_id}")]
        [HttpGet]
        public Category Get_CategoryByID(int category_id)
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.QueryFirstOrDefault<Category>("[dbo].[categories_byId]", new { param1 = category_id }, commandType: System.Data.CommandType.StoredProcedure);
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
                    return myConnection.Query<Task>("[dbo].[tasks_get]", new { param1 = event_id }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        // -------------------------------------------------------------------------------------------------------------------------------

        [Route("api/event/add")]
        [HttpPost]
        public void post(Event Event)
        {
            try
            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[events_add]", new { param1 = Event.Name, param2 = Event.Description, param3 = Event.Id_category }, commandType: System.Data.CommandType.StoredProcedure);
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/event/update")]
        [HttpPost]
        public void update(Event Event)
        {
            try

            {
                using (myConnection)
                {
                    myConnection.Execute("[dbo].[events_update]", new { param1 = Event.Id, param2 = Event.Name, param3 = Event.Description, param4 = Event.Id_category }, commandType: System.Data.CommandType.StoredProcedure);
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

        [Route("api/izvjestaj/eventsbycategory")]
        [HttpGet]
        public IEnumerable<EventsByCategories> GetEventsByCategory()
        {
            try
            {
                using (myConnection)
                {
                    return myConnection.Query<EventsByCategories>("[dbo].[eventsByCategories]", new { }, commandType: System.Data.CommandType.StoredProcedure);
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