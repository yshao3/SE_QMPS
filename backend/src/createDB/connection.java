package createDB;
import java.sql.*;
public class connection{
    Connection Conn = null;
    public connection(String url, String user, String password)throws Exception{
        Class.forName("com.mysql.jdbc.Driver").newInstance();
        Conn = DriverManager.getConnection(url ,user, password);
    }
    public Connection getConnection() throws Exception{
        return Conn;
    }
    public Statement getStatment() throws Exception{
        return Conn.createStatement();
    }
}