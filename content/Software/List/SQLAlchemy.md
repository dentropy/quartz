---
id: refMRlPVoiS2feEtEWIRz
title: SQLAlchemy
desc: ''
updated: 1628449250436
created: 1628449250436
---
# SQLAlchemy
Dump to CSV
-----------

    with open('dump.csv', 'wb') as f:
        out = csv.writer(f)
        out.writerow(['id', 'description'])
    
        for item in session.query(Queue).all():
            out.writerow([item.id, item.description])
    

[https://stackoverflow.com/questions/2952366/dump-csv-from-sqlalchemy](https://stackoverflow.com/questions/2952366/dump-csv-from-sqlalchemy)

Get table columns from sqlAlchemy table model
---------------------------------------------

`myTable.__table__.c or myTable.__table__.c`

[https://stackoverflow.com/questions/24959589/get-table-columns-from-sqlalchemy-table-model](https://stackoverflow.com/questions/24959589/get-table-columns-from-sqlalchemy-table-model)

How to update a table
---------------------

    session.query(Customers).filter(Customers.id! = 2).
    update({Customers.name:"Mr."+Customers.name}, synchronize_session = False)
    

[https://www.tutorialspoint.com/sqlalchemy/sqlalchemy\_orm\_updating\_objects.htm](https://www.tutorialspoint.com/sqlalchemy/sqlalchemy_orm_updating_objects.htm)

Add a some rows
---------------

    from schema import DB, SimpleTable
    
    db = DB("sqlite:///SimpleTableDatabase.sqlite")
    
    db.session.add(SimpleTable(
        some_number = 1,
        some_string = "First"
    ))
    db.session.add(SimpleTable(
        some_number = 2,
        some_string = "Second"
    ))
    db.session.add(SimpleTable(
        some_number = 3,
        some_string = "Third"
    ))
    
    
    db.session.commit()
    

Schema example
--------------

    from sqlalchemy import *
    from sqlalchemy.ext.declarative import declarative_base
    from sqlalchemy.orm import sessionmaker
    
    Base = declarative_base()
    
    class SimpleTable(Base):
        __tablename__ = "Messages"
        id = Column(Integer, primary_key=True)
        some_number = Column(Integer)
        some_string = Column(String(1024))
    
    class DB(object):
        def __init__(self, database_url):
            Base = declarative_base()
            engine = create_engine(database_url)
            Base.metadata.create_all(engine)
            Session = sessionmaker(bind=engine, autoflush=False)
            self.session = Session()
    

View a bunch of rows
--------------------

    from schema import DB, SimpleTable
    
    db = DB("sqlite:///SimpleTableDatabase.sqlite")
    
    print("Getting entire table")
    entire_table = db.session.query(SimpleTable).all()
    for row in entire_table:
        print('id = %d, some_number =  %d, some_string = %s' % (row.id, row.some_number, row.some_string))
    

Delete Row
----------

Date Time Input
---------------

_knowledge.programing.python.time_

[python - SQLAlchemy default DateTime - Stack Overflow](https://stackoverflow.com/questions/13370317/sqlalchemy-default-datetime)

[Python SqlAlchemy order\\~by~ DateTime? - Stack Overflow](https://stackoverflow.com/questions/4582264/python-sqlalchemy-order-by-datetime)

[sqlalchemy - Order By | sqlalchemy Tutorial](https://riptutorial.com/sqlalchemy/example/12146/order-by)

[python - List database tables with SQLAlchemy - Stack Overflow](https://stackoverflow.com/questions/21310549/list-database-tables-with-sqlalchemy)

[How to Execute Raw SQL in SQLAlchemy | Tutorial by Chartio](https://chartio.com/resources/tutorials/how-to-execute-raw-sql-in-sqlalchemy/)

*   [How to Execute Raw SQL in SQLAlchemy | Tutorial by Chartio](https://chartio.com/resources/tutorials/how-to-execute-raw-sql-in-sqlalchemy/)
*   [sqlalchemy - Accessing query results | sqlalchemy Tutorial](https://riptutorial.com/sqlalchemy/example/22161/accessing-query-results)
*   [SQLAlchemy - Quick Guide - Tutorialspoint](https://www.tutorialspoint.com/sqlalchemy/sqlalchemy_quick_guide.htm)
*   [python - Find current directory and file's directory - Stack Overflow](https://stackoverflow.com/questions/5137497/find-current-directory-and-files-directory)

    from sqlalchemy import create_engine
    from sqlalchemy.sql import text
    engine = create_engine('postgresql://wikijs:wikijsrocks@localhost:5432/wiki', echo = True)
    print(engine.table_names())
    with engine.connect() as con:
        statement = text("""select * from pages""")
        results =con.execute(statement)
        print(results)
