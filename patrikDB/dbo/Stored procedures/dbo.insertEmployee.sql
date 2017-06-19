CREATE PROCEDURE [dbo].[insertEmployee]
	@param1 char(31),
	@param2 char(31),
	@param3 date,
	@param4 int,
	@param5 float
AS
	Insert into zaposlenici(name, surname, birthDate, odjel_id, placa) values (@param1, @param2, @param3, @param4, @param5)

