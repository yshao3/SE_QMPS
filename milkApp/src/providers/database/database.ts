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
    private storage: SQLite){
      if (!this.isOpen) {
        this.storage = new SQLite();
        this.storage.create({
          name: 'milk.db',
          location: 'default'
        })
        .then((db: SQLiteObject) => {
          this.db = db;
          let sql = "CREATE TABLE IF NOT EXISTS teat (id INTEGER PRIMARY KEY AUTOINCREMENT, farm TEXT, date TEXT, time TEXT, observer TEXT, milker TEXT, clean INTEGER, deep_present INTEGER, small_dirt INTEGER, large_dirt INTEGER)"
          db.executeSql(sql, []);
          this.isOpen = true;
        }).catch((error) => {
          console.log(error);
        })
      }
  }

  addTeatData(farm, myDate, myTime, observer, milker, clean, deepPresent, smallDirt, largeDirt) {
    return new Promise ((resolve, reject) => {
      let data = [farm, myDate, myTime, observer, milker, clean, deepPresent, smallDirt, largeDirt];
      let sql = "INSERT INTO teat (farm, date, time, observer, milker, clean, deep_present, small_dirt, large_dirt) VALUES (?,?,?,?,?,?,?,?,?)";
      return this.db.executeSql(sql, data).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  getTeatData() {
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM teat", []).then(data => {
        let results = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            results.push({farm: data.farm, 
              date: data.rows.item(i).date, 
              time: data.rows.item(i).time, 
              observer: data.rows.item(i).observer, 
              milker: data.rows.item(i).milker, 
              clean: data.rows.item(i).clean, 
              deep_present: data.rows.item(i).deep_present, 
              small_dirt: data.rows.item(i).small_dirt, 
              large_dirt: data.rows.item(i).large_dirt});
          }
        }
        resolve(results);
      }, (error) => {
        reject(error);
      })
    })
  }
}
