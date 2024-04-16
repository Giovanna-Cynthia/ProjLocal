const fs = require('fs');
const path = require('path');
const fileName = 'dbLocation.json';
const filePath = path.join(__dirname, "..", "database", fileName);

class locationModel{
    static async getLocation() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    if (err.code === "ENOENT") {
                        this.writeLocationFile([])
                        return [];
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(JSON.parse(data));
                }
            })
        })
    }

    static async writeLocationFile(location) {
        return new Promise ((resolve, reject) => {
            fs.writeFile(filePath, JSON.stringify(location), (err) => {
                if (err) reject(err);
                console.log(`Data written to file: ${filePath}`);
                resolve(this.getAllLocation());
            });
        });
    }
    static async getAllLocation() {
        const locations = await this.getLocation();
        return locations;
    }
    
    static async getLocationById() {
        const locations = await this.getLocation();
        return locations;
    }
}

module.exports = locationModel;