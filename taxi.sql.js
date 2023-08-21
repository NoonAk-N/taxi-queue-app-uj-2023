import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();

export async function joinQueue() {
    // console.log('join queue')
    await db.run('UPDATE taxi_queue SET passenger_queue_count = passenger_queue_count + 1');

}

export async function leaveQueue() {
    await db.run('UPDATE taxi_queue SET passenger_queue_count = passenger_queue_count - 1');
}

export async function joinTaxiQueue() {
    await db.run('UPDATE taxi_queue SET taxi_queue_count = taxi_queue_count + 1');
    console.log('joined q')
}

export async function queueLength() {
       
    const result = await db.get('SELECT passenger_queue_count FROM taxi_queue');
    return result.passenger_queue_count;
}

export async function taxiQueueLength() {
    const result = await db.get('SELECT taxi_queue_count FROM taxi_queue');
    return result.taxi_queue_count;

}

export  async function taxiDepart() {
    await db.run('UPDATE taxi_queue SET taxi_queue_count = taxi_queue_count - 1');
    // Decrement the passenger queue count by 12
    await db.run('UPDATE taxi_queue SET passenger_queue_count = passenger_queue_count - 12');

}