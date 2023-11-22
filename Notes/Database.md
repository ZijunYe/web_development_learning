## Database 

- SQL DB 
	- Structure, Easy to maintain
	- Relational DB 
	- Postgres, MySQL 

- NoSQL DB 
	- flexibility, Scalability 

## SQL 
- Create 
	1. Create table 
	```
		CREATE TABLE tableName(
		    id INT NOT NULL, 
		    name STRING,
		    price MONEY,
		    PRIMARY KEY(id) 
		)
	```
	2. Insert data (ADD ROW)
	```
		INSERT INTO products (id,name) VALUES (2,"pencil")
		INSERT INTO products VALUES(1,"pen",1.20)

	```

- Read 
	```
		SELECT * FROM products 

		SELECT name,price FROM products 

		SELECT * FROM products WHERE id = 1
	```	
- Update 
	```
		UPDATE tablename 
		SET price = 0.8 
		WHERE id = 2 
	```

	- ADD Column 
	```
		ALTER TABLE tablename
		ADD stock INT 
	```
- Destroy 
	Delete row 
	```
		DELETE FROM tablename
		WHERE id = 2 
	```
	Delete column 
	```
		ALTER TABLE tablename 
		DROP COLUMN attributeName 
	```


- Relationals, Foreign Keys and Inner Joins 
```
CREATE TABLE orders(
  	id INT NOT NULL,
  	order_number INT, 
  	customer_id INT,
  	product_id INT,
  	PRIMARY KEY(id),
  	FOREIGN key(customer_id) REFERENCEs customer(id) 
  	FOREIGN KEY(product_id) REFERENCES product(id) 
)
```
- Join table 
	```
		SELECT tablename.column_name, table2.column_name 
		FROM tablename
		INNER JOIN table2 ON table1.column_name = table2.column_name 
	```








