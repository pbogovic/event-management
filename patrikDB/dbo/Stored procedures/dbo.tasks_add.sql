CREATE PROCEDURE [dbo].[tasks_add]
	@param1 int,
	@param2 nvarchar(100)
AS

INSERT INTO [dbo].[tasks]
           ([Id_Event]           
           ,[Name])
     VALUES
		(@param1,
		 @param2)
		
          


