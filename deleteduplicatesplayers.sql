DELETE FROM playersNA1 WHERE accountid NOT IN (SELECT MIN(accountid) FROM playersNA1 GROUP BY accountid);
DELETE FROM playersRU WHERE accountid NOT IN (SELECT MIN(accountid) FROM playersRU GROUP BY accountid);
DELETE FROM playersKR WHERE accountid NOT IN (SELECT MIN(accountid) FROM playersKR GROUP BY accountid);
DELETE FROM playersBR1 WHERE accountid NOT IN (SELECT MIN(accountid) FROM playersBR1 GROUP BY accountid);
DELETE FROM playersOC1 WHERE accountid NOT IN (SELECT MIN(accountid) FROM playersOC1 GROUP BY accountid);
DELETE FROM playersJP1 WHERE accountid NOT IN (SELECT MIN(accountid) FROM playersJP1 GROUP BY accountid);
DELETE FROM playersEUN1 WHERE accountid NOT IN (SELECT MIN(accountid) FROM playersEUN1 GROUP BY accountid);
DELETE FROM playersEUW1 WHERE accountid NOT IN (SELECT MIN(accountid) FROM playersEUW1 GROUP BY accountid);
DELETE FROM playersTR1 WHERE accountid NOT IN (SELECT MIN(accountid) FROM playersTR1 GROUP BY accountid);
DELETE FROM playersLA1 WHERE accountid NOT IN (SELECT MIN(accountid) FROM playersLA1 GROUP BY accountid);
DELETE FROM playersLA2 WHERE accountid NOT IN (SELECT MIN(accountid) FROM playersLA2 GROUP BY accountid);
