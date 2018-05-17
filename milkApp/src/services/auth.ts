import * as firebase from 'firebase'
import { DatabaseProvider } from '../providers/database/database';

export class AuthService {
    public email: string;
    public password: string;
    public ListUser: any;
    
	signup(email: string, password: string) {
        this.email = email;
        this.password = password;
		return firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    
	signin(email: string, password: string) {
        this.email = email;
        this.password = password;
		return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    logout() {
        firebase.auth().signOut();
    }

    getActiveUser() {
        return firebase.auth().currentUser;
    }


}