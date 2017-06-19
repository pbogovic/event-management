using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Http;

namespace Zadatak_natjecaj
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {
            // Code that runs on application startup
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

           RouteTable.Routes.MapHttpRoute(
           name: "Ajpi",
           routeTemplate: "api/{controller}/{id}",
           defaults: new { id = System.Web.Http.RouteParameter.Optional }
            /*routeTemplate: "Manager/{controller}/"*/  
        );



        }
    }
}