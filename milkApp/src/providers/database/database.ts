import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseProvider {
  private db: SQLiteObject;
  private isOpen: boolean;

  constructor(public http: Http,
    public storage: SQLite){
      if (!this.isOpen) {
        this.storage = new SQLite();
        this.storage.create({
          name: 'milk.db',
          location: 'default'
        })
        .then((db: SQLiteObject) => {
          this.db = db;
          let sql1 = "CREATE TABLE IF NOT EXISTS cleanliness_fact (farm_id TEXT, date TEXT, staff_id TEXT, milker_id TEXT, clean, dip_present, small_dirt, large_dirt, before_after TEXT)";
          db.executeSql(sql1, {})
          .then(() => console.log("executed sql teat"))
          .catch(e => console.log(e));

          let sql2 = "CREATE TABLE IF NOT EXISTS unit_fact (farm_id TEXT, date TEXT, staff_id TEXT, good, bad)";
          db.executeSql(sql2, {})
          .then(() => console.log("executed sql alignment"))
          .catch(e => console.log(e));

          let sql3 = "CREATE TABLE IF NOT EXISTS udder_hygiene_fact (farm_id TEXT, date TEXT, staff_id TEXT, group_id TEXT, clean, slightly_dirt, moderately_dirt, caked_on_dirt)"
          db.executeSql(sql3, {})
          .then(() => console.log("executed sql hygiene"))
          .catch(e => console.log(e));

          let sql4 = "CREATE TABLE IF NOT EXISTS postmilking_fact (farm_id TEXT, date TEXT, staff_id TEXT, group_id TEXT, LH_skin_condition TEXT, LF_skin_condition TEXT, RH_skin_condition TEXT, RF_skin_condition TEXT, LH_color TEXT, LF_color TEXT, RH_color TEXT, RF_color TEXT, LH_swelling TEXT, LF_swelling TEXT, RH_swelling TEXT, RF_swelling TEXT, LH_hardness TEXT, LF_hardness TEXT, RH_hardness TEXT, RF_hardness TEXT, LH_end_score TEXT, LF_end_score TEXT, RH_end_score TEXT, RF_end_score TEXT)";
          db.executeSql(sql4, {})
          .then(() => console.log("executed sql postmilk"))
          .catch(e => console.log(e));

          let sql5 = "CREATE TABLE IF NOT EXISTS strip_fact (farm_id TEXT, date TEXT, staff_id TEXT, Stall_no TEXT, ML TEXT, isBalanced TEXT)";
          db.executeSql(sql5, {})
          .then(() => console.log("executed sql strip"))
          .catch(e => console.log(e));

          let sql6 = "CREATE TABLE IF NOT EXISTS lactocoder_fact (farm_id TEXT, date TEXT, parlor_type TEXT, pre_milking TEXT, herd_size TEXT, size TEXT, procedures TEXT, milking_frequency TEXT, no_operators TEXT, prep TEXT, milking_routine TEXT, cow_name TEXT, total_milk TEXT, remark TEXT, dip_contact_time, lag_contact_stimulate, unit_on_time)";
          db.executeSql(sql6, {})
          .then(() => console.log("executed sql lactocoder"))
          .catch(e => console.log(e));

          let sql7 = "CREATE TABLE IF NOT EXISTS user_fact (email TEXT, password TEXT)";
          db.executeSql(sql7, {})
          .then(() => console.log("executed sql user_fact"))
          .catch(e => console.log(e));

          this.isOpen = true;
        }).catch((error) => {
          console.log(error);
        })
      }
  }


  //teat data
  addTeatData(farm: string, myDate: string, observer: string, milker: string, clean: number, dipPresent: number, smallDirt: number, largeDirt: number, beforeAfter: string) {
    return new Promise ((resolve, reject) => {
      let input = [farm, myDate, observer, milker, clean, dipPresent, smallDirt, largeDirt, beforeAfter];
      let sql = "INSERT INTO cleanliness_fact (farm_id, date, staff_id, milker_id, clean, dip_present, small_dirt, large_dirt, before_after) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
      this.db.executeSql(sql, input).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  getTeatData() {
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM cleanliness_fact", []).then(data => {
        let results = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            results.push({farm_id: data.rows.item(i).farm_id,
              date: data.rows.item(i).date,
              staff_id: data.rows.item(i).staff_id,
              milker_id: data.rows.item(i).milker_id,
              clean: data.rows.item(i).clean,
              dip_present: data.rows.item(i).dip_present,
              small_dirt: data.rows.item(i).small_dirt,
              large_dirt: data.rows.item(i).large_dirt,
              before_after: data.rows.item(i).before_after});
          }
        }
        console.log(results);
        resolve(results);
      }, (error) => {
        reject(error);
      })
    })
  }

  cleanTeatData() {
    return new Promise((resolve, reject) => {
      return this.db.executeSql("DELETE FROM cleanliness_fact",{});
    })
  }

  //alignment data
  addAlignmentData(farm: string, myDate: string, observer: string, good: number, bad: number) {
    let sql1 = "CREATE TABLE IF NOT EXISTS cleanliness_fact (farm_id TEXT, date TEXT, staff_id TEXT, milker_id TEXT, clean, dip_present, small_dirt, large_dirt, before_after TEXT)";
    this.db.executeSql(sql1, {})
    .then(() => console.log("executed sql teat"))
    .catch(e => console.log(e));


    return new Promise ((resolve, reject) => {
      let input = [farm, myDate, observer, good, bad];
      let sql = "INSERT INTO unit_fact (farm_id, date, staff_id, good, bad) VALUES (?, ?, ?, ?, ?)";
      this.db.executeSql(sql, input).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  getAlignmentData() {
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM unit_fact", []).then(data => {
        let results = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            results.push({farm_id: data.rows.item(i).farm_id,
              date: data.rows.item(i).date,
              staff_id: data.rows.item(i).staff_id,
              good: data.rows.item(i).good,
              bad: data.rows.item(i).bad});
          }
        }
        resolve(results);
      }, (error) => {
        reject(error);
      })
    })
  }

  cleanAlignmentData() {
    return new Promise((resolve, reject) => {
      return this.db.executeSql("DELETE FROM unit_fact",{});
    })
  }

  //hygiene data
  addHygieneData(farm: string, myDate: string, observer: string, group: string, clean: number, slightlyDirt: number, moderatelyDirt: number, cakedOnDirt: number) {
    return new Promise ((resolve, reject) => {
      let input = [farm, myDate, observer, group, clean, slightlyDirt, moderatelyDirt, cakedOnDirt];
      let sql = "INSERT INTO udder_hygiene_fact (farm_id, date, staff_id, group_id, clean, slightly_dirt, moderately_dirt, caked_on_dirt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      this.db.executeSql(sql, input).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  getHygieneData() {
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM udder_hygiene_fact", []).then(data => {
        let results = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            results.push({farm_id: data.rows.item(i).farm_id,
              date: data.rows.item(i).date,
              staff_id: data.rows.item(i).staff_id,
              group_id: data.rows.item(i).group_id,
              clean: data.rows.item(i).clean,
              slightly_dirt: data.rows.item(i).slightly_dirt,
              moderately_dirt: data.rows.item(i).moderately_dirt,
              caked_on_dirt: data.rows.item(i).caked_on_dirt});
          }
        }
        resolve(results);
      }, (error) => {
        reject(error);
      })
    })
  }

  cleanHygieneData() {
    return new Promise((resolve, reject) => {
      return this.db.executeSql("DELETE FROM udder_hygiene_fact",{});
    })
  }

  //postmilk data
  addPostmilkData(farm: string, myDate: string, observer: string, group: string, teatSkinLH: string, teatSkinLF: string,teatSkinRH: string,teatSkinRF: string,teatColorLH: string,teatColorLF: string, teatColorRH: string, teatColorRF: string, swellingLH: string, swellingLF: string, swellingRH: string, swellingRF: string, hardnessLH: string, hardnessLF: string, hardnessRH: string, hardnessRF: string, scoreLH: string, scoreLF: string, scoreRH: string, scoreRF: string) {
    return new Promise ((resolve, reject) => {
      let input = [farm,
        myDate,
        observer,
        group,
        teatSkinLH,
        teatSkinLF,
        teatSkinRH,
        teatSkinRF,
        teatColorLH,
        teatColorLF,
        teatColorRH,
        teatColorRF,
        swellingLH,
        swellingLF,
        swellingRH,
        swellingRF,
        hardnessLH,
        hardnessLF,
        hardnessRH,
        hardnessRF,
        scoreLH,
        scoreLF,
        scoreRH,
        scoreRF];

      let sql = "INSERT INTO postmilking_fact (farm_id, date, staff_id, group_id, LH_skin_condition, LF_skin_condition, RH_skin_condition, RF_skin_condition, LH_color, LF_color, RH_color, RF_color, LH_swelling, LF_swelling, RH_swelling, RF_swelling, LH_hardness, LF_hardness, RH_hardness, RF_hardness, LH_end_score, LF_end_score, RH_end_score, RF_end_score) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      this.db.executeSql(sql, input).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  getPostmilkData() {
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM postmilking_fact", []).then(data => {
        let results = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            results.push({farm_id: data.rows.item(i).farm_id,
              date: data.rows.item(i).date,
              staff_id: data.rows.item(i).staff_id,
              group_id: data.rows.item(i).group_id,
              LH_skin_condition: data.rows.item(i).LH_skin_condition,
              LF_skin_condition: data.rows.item(i).LF_skin_condition,
              RH_skin_condition: data.rows.item(i).RH_skin_condition,
              RF_skin_condition: data.rows.item(i).RF_skin_condition,
              LH_color: data.rows.item(i).LH_color,
              LF_color: data.rows.item(i).LF_color,
              RH_color: data.rows.item(i).RH_color,
              RF_color: data.rows.item(i).RF_color,
              LH_swelling: data.rows.item(i).LH_swelling,
              LF_swelling: data.rows.item(i).LF_swelling,
              RH_swelling: data.rows.item(i).RH_swelling,
              RF_swelling: data.rows.item(i).RF_swelling,
              LH_hardness: data.rows.item(i).LH_hardness,
              LF_hardness: data.rows.item(i).LF_hardness,
              RH_hardness: data.rows.item(i).RH_hardness,
              RF_hardness: data.rows.item(i).RF_hardness,
              LH_end_score: data.rows.item(i).LH_end_score,
              LF_end_score: data.rows.item(i).LF_end_score,
              RH_end_score: data.rows.item(i).RH_end_score,
              RF_end_score: data.rows.item(i).RF_end_score,
            });
          }
        }
        resolve(results);
      }, (error) => {
        reject(error);
      })
    })
  }

  cleanPostmilkData() {
    return new Promise((resolve, reject) => {
      return this.db.executeSql("DELETE FROM postmilking_fact",{});
    })
  }

  //strip data
  addStripData(farm: string, myDate: string, observer: string, stall: string, ml: string, balance: string) {
    return new Promise ((resolve, reject) => {
      let input = [farm, myDate, observer, stall, ml, balance];
      let sql = "INSERT INTO strip_fact (farm_id, date, staff_id, Stall_no, ML, isBalanced) VALUES (?, ?, ?, ?, ?, ?)";
      console.log(sql)
      console.log(input)
      this.db.executeSql(sql, input).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  getStripData() {
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM strip_fact", []).then(data => {
        let results = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            results.push({farm_id: data.rows.item(i).farm_id,
              date: data.rows.item(i).date,
              staff_id: data.rows.item(i).staff_id,
              Stall_no: data.rows.item(i).Stall_no,
              ML: data.rows.item(i).ML,
              isBalanced: data.rows.item(i).isBalanced})
          }
        }
        resolve(results);
      }, (error) => {
        reject(error);
      })
    })
  }

  cleanStripData() {
    return new Promise((resolve, reject) => {
      return this.db.executeSql("DELETE FROM strip_fact",{});
    })
  }

  // lactocoder data
  addLactocoderData(farm: string,
      myDate: string,
      parlor: string,
      pre_milking: string,
      herd_size: string,
      size: string,
      procedures: string,
      frequency: string,
      operators: string,
      prep: string,
      routine: string,
      cowName: string,
      milk: string,
      remark: string,
      dipContact: number,
      lagTime: number,
      unitOn: number) {
    return new Promise ((resolve, reject) => {
          let input = [farm,
          myDate,
          parlor,
          pre_milking,
          herd_size,
          size,
          procedures,
          frequency,
          operators,
          prep,
          routine,
          cowName,
          milk,
          remark,
          dipContact,
          lagTime,
          unitOn];
        let sql = "INSERT INTO lactocoder_fact (farm_id, date, parlor_type, pre_milking, herd_size, size, procedures, milking_frequency, no_operators, prep, milking_routine, cow_name, total_milk, remark, dip_contact_time, lag_contact_stimulate, unit_on_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        console.log(sql)
        console.log(input)
        this.db.executeSql(sql, input).then((data) => {
          resolve(data);
        }, (error) => {
        reject(error);
        });
      });
    }

    getLactocoderData() {
      return new Promise((resolve, reject) => {
        this.db.executeSql("SELECT * FROM lactocoder_fact", []).then(data => {
          let results = [];
          if (data.rows.length > 0) {
            for (var i = 0; i < data.rows.length; i++) {
              results.push({farm_id: data.rows.item(i).farm_id,
                date: data.rows.item(i).date,
                parlor_type: data.rows.item(i).parlor_type,
                pre_milking: data.rows.item(i).pre_milking,
                herd_size: data.rows.item(i).herd_size,
                size: data.rows.item(i).size,
                procedures: data.rows.item(i).procedures,
                milking_frequency: data.rows.item(i).milking_frequency,
                no_operators: data.rows.item(i).no_operators,
                prep: data.rows.item(i).prep,
                milking_routine: data.rows.item(i).milking_routine,
                cow_name: data.rows.item(i).cow_name,
                total_milk: data.rows.item(i).total_milk,
                remark: data.rows.item(i).remark,
                dip_contact_time: data.rows.item(i).dip_contact_time,
                lag_contact_stimulate: data.rows.item(i).lag_contact_stimulate,
                unit_on_time: data.rows.item(i).unit_on_time});
            }
          }
          resolve(results);
        }, (error) => {
          reject(error);
        })
      })
    }

    cleanLactocoderData() {
      return new Promise((resolve, reject) => {
        return this.db.executeSql("DELETE FROM lactocoder_fact",{});
      })
    }

    addUserInfo(email: string, password: string) {
        return new Promise ((resolve, reject) => {
        let input = [email, password];
        this.cleanUserInfo();
        let sql = "INSERT INTO user_fact (email, password) VALUES (?, ?)";
        console.log(sql)
        console.log("addUserInfo: " + input)
        this.db.executeSql(sql, input).then((data) => {
          resolve(data);
        }, (error) => {
        reject(error);
        });
      });
    }

    getUserInfo() {
      return new Promise((resolve, reject) => {
        this.db.executeSql("SELECT * FROM user_fact", []).then(data => {
          let results = [];
          if (data.rows.length > 0) {
            for (var i = 0; i < data.rows.length; i++) {
                results.push({email: data.rows.item(i).email,
                password: data.rows.item(i).password})
            }
          }
          resolve(results);
        }, (error) => {
          reject(error);
        })
      })
    }

    cleanUserInfo() {
      console.log("clean")
      return new Promise((resolve, reject) => {
        return this.db.executeSql("DELETE FROM user_fact",{});
      })
    }

  }
