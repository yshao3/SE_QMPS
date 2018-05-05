package etl;

import createDB.connection;

import java.sql.*;


public class etl {
    private static connection con = null;
    public static void main(String[] args) throws Exception{
        String url = "jdbc:mysql://localhost:3306?autoReconnect=true&useSSL=false";
        String user = "root";
        String password = "1234";
        if (args.length >= 3){
            url = "jdbc:mysql://"+ args[0]+"?autoReconnect=true&useSSL=false";
            user = args[1];
            password = args[2];
        }
        url = "jdbc:mysql://localhost:3306/QMPS?autoReconnect=true&useSSL=false";
        con = new connection(url, user, password);

    }
    public static ResultSet insert_group_dimension() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement("insert into groups(group_id, " +
                "farm_id,group_size)values(?,?,?);");
        return prep.executeQuery();
    }
    public static ResultSet insert_farm_dimension() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement(
                "insert into farm(farm_id,farm_name)" +
                "values(?,?);");
        return prep.executeQuery();
    }
    public static ResultSet insert_staff_dimension() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement(
                "insert into staff(staff_id," +
                " staff_name, " +
                "groups,is_milker)" +
                "values(?,?,?,?);");
        return prep.executeQuery();
    }
    public static ResultSet insert_gerneral_dimension() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement(
                "insert into general_information(info_id, " +
                        "parlor_type, " +
                        "size, no_operators, " +
                        "pre_milking,procedures, " +
                        "prep, " +
                        "herd_size, " +
                        "milking_frequency, " +
                        "milking_routine)" +
                        "values(?,?,?,?,?,?,?,?,?,?);");
        return prep.executeQuery();
    }
    public static ResultSet insert_udder_fact() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement("");
        return prep.executeQuery();
    }
    public static ResultSet insert_strip_fact() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement("");
        return prep.executeQuery();
    }
    public static ResultSet insert_unit_fact() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement("");
        return prep.executeQuery();
    }
    public static ResultSet insert_postmilking_fact() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement(
                "Insert into post_milking_assessment_fact(" +
                        "staff_id integer,farm_id,group_id,dates," +
                        "LH_skin_condition,LH_color ,LH_swelling,LH_hardness,LH_end_score," +
                        "LF_skin_condition,LF_color ,LF_swelling,LF_hardness,LF_end_score," +
                        "RH_skin_condition,RH_color ,RH_swelling,RH_hardness,RH_end_score ," +
                        "RF_skin_condition,RF_color,RF_swelling,RF_hardness,RF_end_score" +
                ") values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
        return prep.executeQuery();
    }
    public static ResultSet insert_cleanliness_fact() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement("");
        return prep.executeQuery();
    }
    public static ResultSet insert_lactocoder_fact() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement(
                "Insert into lactocoder_analysis_fact(staff_id," +
                        "farm_id,info_id,dates,dip,strip," +
                        "wipe,attach,remove_ ,dip_contact_time," +
                        "lag_contact_stimulate," +
                        "unit_on_time,total_milk,remark)" +
                        "values(?,?,?,?,?,?,?,?,?,?,?,?,?,?);");
        return prep.executeQuery();
    }
    public static ResultSet get_strip_fact() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement("");
        return prep.executeQuery();
    }
    public static ResultSet get_udder_fact() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement("");
        return prep.executeQuery();
    }
    public static ResultSet get_unit_fact() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement("");
        return prep.executeQuery();
    }
    public static ResultSet get_postmilking_fact() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement("");
        return prep.executeQuery();
    }
    public static ResultSet get_cleanliness_fact() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement("");
        return prep.executeQuery();
    }
    public static ResultSet get_lactocoder_fact() throws Exception {
        PreparedStatement prep = con.getConnection().prepareStatement("");
        return prep.executeQuery();
    }

}
