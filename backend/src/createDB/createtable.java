package createDB;
import java.sql.*;
public class createtable{
	public static void main(String[] args) throws Exception{
		String url = "jdbc:mysql://localhost:3306?autoReconnect=true&useSSL=false";
		String user = "root";
		String password = "1234";
		if (args.length >= 3){
			url = "jdbc:mysql://"+ args[0]+"?autoReconnect=true&useSSL=false";
			user = args[1];
			password = args[2];
		}
		connection con = new connection(url, user, password);
		Statement s = con.getStatment();
		s.executeUpdate("Drop database if exists QMPS");
		s.executeUpdate("Create database QMPS");
		url = "jdbc:mysql://localhost:3306/QMPS?autoReconnect=true&useSSL=false";
		con = new connection(url, user, password);
		s = con.getStatment();
		create_staff_dimension(s, "staff");
		create_farm_dimension(s, "farm");
		create_group_dimension(s, "groups");
		create_gerneral_dimension(s, "general_information");
		create_cleanliness_fact(s, "cleanliness_fact");
		create_lactocoder_fact(s, "lactocoder_fact");
		create_postmilking_fact(s, "postmilking_fact");
		create_strip_fact(s, "strip_fact");
		create_unit_fact(s, "unit_alignment_fact");
		create_udder_fact(s, "udder_hygiene_fact");

	}
	public static void create_group_dimension(Statement s, String name) throws Exception{
		String sql = "create table "+name+"(" +
				"group_id integer," +
				"farm_id integer," +
				"group_size integer," +
				"primary key(group_id, farm_id)," +
				"foreign key(farm_id) references farm(farm_id)" +
				");";
		s.executeUpdate("Drop table if exists " + name);
		s.executeUpdate(sql);
	}
//	public static void create_date_dimension(Statement s, String name) throws Exception{
//		String sql = "";
//		s.executeUpdate("Drop table if exists " + name);
//		s.executeUpdate(sql);
//	}
	public static void create_farm_dimension(Statement s, String name) throws Exception{
		String query = "create table "+name+"(" +
				"farm_id integer," +
				"farm_name varchar(32)," +
				"primary key(farm_id)" +
				");";
		s.executeUpdate("Drop table if exists " + name);
		s.executeUpdate(query);
	}
	public static void create_staff_dimension(Statement s, String name) throws Exception{
		String query = "create table "+name+"(" +
				"staff_id Integer," +
				"staff_name varchar(32)," +
				"groups varchar(32)," +
				"is_milker boolean," +
				"primary key(staff_id)" +
				");";
		s.executeUpdate("Drop table if exists " + name);
		s.executeUpdate(query);
	}
	public static void create_gerneral_dimension(Statement s, String name) throws Exception{
		String query = "create table "+name+"(" +
				"info_id integer," +
				"parlor_type varchar(32)," +
				"size integer," +
				"no_operators integer," +
				"pre_milking varchar(32)," +
				"procedures varchar(32)," +
				"prep varchar(32)," +
				"herd_size integer," +
				"milking_frequency enum('2X', '3X')," +
				"milking_routine varchar(32)," +
				"primary key(info_id)" +
				");";
		s.executeUpdate("Drop table if exists " + name);
		s.executeUpdate(query);
	}
	public static void create_udder_fact(Statement s, String name) throws Exception{
		String query = "create table "+name+"("+
				"group_id integer," +
				"staff_id integer," +
				"date DateTime," +
				"farm_id integer," +
				"free integer," +
				"slightly integer," +
				"moderate integer," +
				"heavy integer," +
				"foreign key(farm_id) references farm(farm_id)," +
				"foreign key(staff_id) references staff(staff_id)," +
				"foreign key(group_id) references groups(group_id))";
		s.executeUpdate("Drop table if exists " + name);
		s.executeUpdate(query);
	}
	public static void create_postmilking_fact(Statement s, String name) throws Exception{
		String query = "create table "+name+"("+
				"staff_id integer," +
				"farm_id integer," +
				"group_id integer," +
				"dates datetime," +
				"LH_skin_condition enum('D', 'OL', 'H')," +
				"LH_color enum('R', 'B', 'DS')," +
				"LH_swelling enum('VM', 'SW')," +
				"LH_hardness enum('F', 'W')," +
				"LH_end_score enum('N', 'S', 'SR','R','VR')," +
				"LF_skin_condition enum('D', 'OL', 'H')," +
				"LF_color enum('R', 'B', 'DS')," +
				"LF_swelling enum('VM', 'SW')," +
				"LF_hardness enum('F', 'W')," +
				"LF_end_score enum('N', 'S', 'SR','R','VR')," +
				"RH_skin_condition enum('D', 'OL', 'H')," +
				"RH_color enum('R', 'B', 'DS')," +
				"RH_swelling enum('VM', 'SW')," +
				"RH_hardness enum('F', 'W')," +
				"RH_end_score enum('N', 'S', 'SR','R','VR')," +
				"RF_skin_condition enum('D', 'OL', 'H')," +
				"RF_color enum('R', 'B', 'DS')," +
				"RF_swelling enum('VM', 'SW')," +
				"RF_hardness enum('F', 'W')," +
				"RF_end_score enum('N', 'S', 'SR','R','VR')," +
				"foreign key(staff_id) references staff(staff_id)," +
				"foreign key(farm_id) references farm(farm_id)," +
				"foreign key(group_id) references groups(group_id)" +
				");";
		s.executeUpdate("Drop table if exists " + name);
		s.executeUpdate(query);
	}
	public static void create_strip_fact(Statement s, String name) throws Exception{
		String query = "create table "+name+"("+
				"staff_id integer," +
				"date DateTime," +
				"farm_id integer," +
				"ML integer," +
				"Stall_no integer," +
				"isBalanced boolean," +
				"foreign key(farm_id) references farm(farm_id)," +
				"foreign key(staff_id) references staff(staff_id))";
		s.executeUpdate("Drop table if exists " + name);
		s.executeUpdate(query);
	}
	public static void create_unit_fact(Statement s, String name) throws Exception{
		String query = "create table "+name+"("+
				"date DateTime," +
				"farm_id integer," +
				"good integer," +
				"bad integer," +
				"foreign key(farm_id) references farm(farm_id))" ;
		s.executeUpdate("Drop table if exists " + name);
		s.executeUpdate(query);
	}
	public static void create_cleanliness_fact(Statement s, String name) throws Exception{
		String query = "create table "+name+"("+
				"group_id integer,"+
				"staff_id integer," +
				"milker_id integer,"+
				"date DateTime," +
				"farm_id integer," +
				"isAfter boolean," +
				"clean integer," +
				"deep integer," +
				"small_dirt integer," +
				"large_dirt integer," +
				"foreign key(farm_id) references farm(farm_id)," +
				"foreign key(staff_id) references staff(staff_id)," +
				"foreign key(milker_id) references staff(staff_id)," +
				"foreign key(group_id) references groups(group_id))";
		s.executeUpdate("Drop table if exists " + name);
		s.executeUpdate(query);
	}
	public static void create_lactocoder_fact(Statement s, String name) throws Exception{
		String query = "create table "+name+"("+
				"staff_id integer," +
				"farm_id integer," +
				"info_id integer," +
				"dates datetime," +
				"dip time," +
				"strip time," +
				"wipe time," +
				"attach time," +
				"remove_ time," +
				"dip_contact_time time," +
				"lag_contact_stimulate time," +
				"unit_on_time integer," +
				"total_milk integer," +
				"remark long varchar," +
				"foreign key(staff_id) references staff(staff_id)," +
				"foreign key(farm_id) references farm(farm_id)," +
				"foreign key(info_id) references general_information(info_id)" +
				");";
		s.executeUpdate("Drop table if exists " + name);
		s.executeUpdate(query);
	}

}