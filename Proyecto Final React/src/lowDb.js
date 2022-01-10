import low from 'lowdb/lib';
import LocalStorage from 'lowdb/adapters/LocalStorage';
 
console.log("Estoy en lowdb");
const adapter = new LocalStorage('db');
const db = low(adapter);
 
// Añadimos valires por defecto a nuestra nueva DB
db.defaults({users: [{'name':'admin', 'email':'admin', 'password':'admin'}] }).write();
 
export default db;