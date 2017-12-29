DROP TABLE IF EXISTS matchdata;
CREATE TABLE matchdata (
	ID SERIAL PRIMARY KEY,
	timeadded TIMESTAMP,
	gameid FLOAT,
	championid INTEGER,
	lane VARCHAR,
	win BOOLEAN,
	echampionid INTEGER,
	item1id FLOAT,
	item2id FLOAT,
	item3id FLOAT,
	item4id FLOAT,
	item5id FLOAT,
	item6id FLOAT,
	summoner1 INTEGER,
	summoner2 INTEGER,
	runes JSONB,
	masteries JSONB,
	skills JSONB,
	proname VARCHAR
);
