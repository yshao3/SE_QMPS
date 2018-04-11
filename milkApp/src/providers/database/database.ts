import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  isOpen: boolean;

  constructor(public http: HttpClient,
    private storage: Storage,
    private sqlite: SQLite,
    private platform: Platform) {
    this.platform.ready().then(() => {
      if (!this.isOpen) {
        this.sqlite = new SQLite();
        this.sqlite.create({
          name: 'milkdata.db',
          location: 'default'
        }).then((db: SQLiteObject) =>{
          this.database = db;
          db.executeSql('CREATE TABLE IF NOT EXISTS teat(\
            farm TEXT,\
            date TEXT,\
            observer TEXT,\
            milker TEXT,\
            clean INTEGER,\
            dip_present INTEGER,\
            small_dirt INTEGER,\
            large_dirt INTEGER,\
            beforeAfter TEXT))', {});
          this.isOpen = true;
        }).catch((error) => {
          console.log(error);
        })
      }
    });
  }

  addTeatData(farm, date, observer, milker, clean, dip_present, small_dirt, large_dirt, beforeAfter) {
    let data = [farm, date, observer, milker, clean, dip_present, small_dirt, large_dirt, beforeAfter];
    let q = "INSERT INTO teat(farm, date, observer, milker, clean, dip_present, small_dirt, large_dirt, beforeAfter) VALUES(?,?,?,?,?,?,?,?,?)";
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'milkdata.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        db.executeSql(q, data).then((res) => {
          resolve(data);
          }, (error) => {
            reject(error);
          })
      });
    });
  }

  getTeatData() {
    return this.database.executeSql("SELECT * FROM teat", []).then((data) => {
      let items = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
         items.push({farm: data.rows.item(i).farm,
            date: data.rows.item(i).date,
            observer: data.rows.item(i).observer,
            milker: data.rows.item(i).milker,
            clean: data.rows.item(i).clean,
            dip_present: data.rows.item(i).dip_present,
            small_dirt: data.rows.item(i).small_dirt,
            large_dirt: data.rows.item(i).large_dirt,
            beforeAfter: data.rows.item(i).beforeAfter})
        }
      }
      return items;
    }, err => {
        console.log('Error', err);
        return [];
    });
  }

}
