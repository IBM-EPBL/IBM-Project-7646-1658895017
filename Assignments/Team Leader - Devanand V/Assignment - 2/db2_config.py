import ibm_db
import sys

conn = ''


def get_connection():
    db_name = "bludb"
    db_host_name = "6667d8e9-9d4d-4ccb-ba32-21da3bb5aafc.c1ogj3sd0tgtu0lqde00.databases.appdomain.cloud"
    db_port = "30376"
    db_protocol = "tcpip"
    db_username = "jzt12971"
    db_password = "dAmITuIrVMzd1jkp"

    try:
        connection_str = f"database={db_name};hostname={db_host_name};port={db_port};protocol={db_protocol};uid={db_username};pwd={db_password};security=ssl"
        # conn_str = f"DATABASE={db_name};HOSTNAME={db_host_name};PORT={db_port};SECURITY=SSL;SSLServerCertificate=<FULL_PATH_TO_SERVER_CERTIFICATE>;UID={db_username};PWD={db_password}"
        connection = ibm_db.connect(connection_str, '', '')

        # sql = " INSERT INTO  'JZT12971'.'USERS' ('ID','USERNAME','EMAIL','ROLLNO','PASSWORD') VALUES( ?, ?, ?, ?,?)"
        return connection
    except:
        print("Connection failed:", ibm_db.conn_errormsg())
        sys.exit(1)
