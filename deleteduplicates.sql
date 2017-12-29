DELETE FROM matchesNA1 WHERE gameid NOT IN (SELECT MIN(gameid) FROM matchesNA1 GROUP BY gameid);
DELETE FROM matchesRU WHERE gameid NOT IN (SELECT MIN(gameid) FROM matchesRU GROUP BY gameid);
DELETE FROM matchesKR WHERE gameid NOT IN (SELECT MIN(gameid) FROM matchesKR GROUP BY gameid);
DELETE FROM matchesBR1 WHERE gameid NOT IN (SELECT MIN(gameid) FROM matchesBR1 GROUP BY gameid);
DELETE FROM matchesOC1 WHERE gameid NOT IN (SELECT MIN(gameid) FROM matchesOC1 GROUP BY gameid);
DELETE FROM matchesJP1 WHERE gameid NOT IN (SELECT MIN(gameid) FROM matchesJP1 GROUP BY gameid);
DELETE FROM matchesEUN1 WHERE gameid NOT IN (SELECT MIN(gameid) FROM matchesEUN1 GROUP BY gameid);
DELETE FROM matchesEUW1 WHERE gameid NOT IN (SELECT MIN(gameid) FROM matchesEUW1 GROUP BY gameid);
DELETE FROM matchesTR1 WHERE gameid NOT IN (SELECT MIN(gameid) FROM matchesTR1 GROUP BY gameid);
DELETE FROM matchesLA1 WHERE gameid NOT IN (SELECT MIN(gameid) FROM matchesLA1 GROUP BY gameid);
DELETE FROM matchesLA2 WHERE gameid NOT IN (SELECT MIN(gameid) FROM matchesLA2 GROUP BY gameid);

delete
from table matchesLA1
using table t2
where t1.columnA = t2.columnA
and t1.rowid > t2.rowid
