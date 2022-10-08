import ibm_db
import json


def insert_user_data(conn, details):
    sql = 'INSERT INTO  "JZT12971"."USERS" ("ID","USERNAME","EMAIL","ROLLNO","PASSWORD") VALUES(seq_user.nextval, ?, ?, ? ,?);'
    stmt = ibm_db.prepare(conn, sql)
    # for i in range(1, len(details)):
    #      print(i, details[i - 1])
    for i in range(0, len(details)):
        ibm_db.bind_param(stmt, i + 1, details[i])
    ibm_db.execute(stmt)


def isAuthenticate(conn, username, password):
    sql = "SELECT * FROM users where username = ? AND password = ?;"
    stmt = ibm_db.prepare(conn, sql)
    ibm_db.bind_param(stmt, 1, username)
    ibm_db.bind_param(stmt, 2, password)
    ibm_db.execute(stmt)
    return ibm_db.fetch_assoc(stmt)

def isUserExists(conn, username):
    sql = "SELECT * FROM users where username = ?;"
    stmt = ibm_db.prepare(conn, sql)
    ibm_db.bind_param(stmt, 1, username)
    ibm_db.execute(stmt)
    acc = ibm_db.fetch_assoc(stmt)
    if acc == False:
        return acc
    else:
        print(acc)
        return (username == acc['USERNAME'].strip())
    # print(acc['USERNAME'], ".")
    # print(username == acc['USERNAME'].strip())

    return acc
    # return ibm_db.fetch_assoc(stmt)
