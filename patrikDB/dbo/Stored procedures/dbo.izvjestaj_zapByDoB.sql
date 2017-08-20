Create PROCEDURE [dbo].[izvjestaj_zapByDoB]

AS
	SELECT year(birthdate) as yearGroup, count(Id) as brZap
	from zaposlenici		
	group by year(birthdate)


