const fs = require('fs');
class pocketMonsters {
    
    constructor(fromPath, toPath) {
        this.fromFilePath = `${fromPath}.json`;
        this.toFilePath = `${toPath}.json`;
    }

    asyncReadJsonData() {
        return new Promise((resolve, reject)=>{
            fs.readFile(this.fromFilePath, (err, file)=>{
                if(err) return reject(err);
                resolve(JSON.parse(file))
            });
        });
    }

    asyncWriteJsonData(finalData) {
        fs.writeFile(this.toFilePath, JSON.stringify(finalData, null, 2), (err) => {
            if (err) console.log(err);
        });
    }

    includeRegularStats(element) {
        var nationalNumber = element.national_number;
        var name = element.name;
        var levels = [this.includeLevelStats(element)];
        return {nationalNumber,
            name,
            levels
        };
    }

    includeLevelStats(element) {
        var levelsObj = {
            name: (element.evolution !== null) ? element.evolution.name : element.name,
            skills:{
                total: element.total,
                hp: element.hp,
                attack: element.attack,
                defense: element.defense,
                spAtk: element.sp_atk,
                spDef: element.sp_def,
                speed: element.speed
            }
        }
        return levelsObj;
    }

    asyncProcess = (dataObj)=>{
        var dataObj = dataObj;
        var results = [];
        var pokeObj = {};
    
        dataObj.results.forEach((element) => {
            let result = results.find(resultEle => {
                return resultEle.nationalNumber === element.national_number;
            });
            if(result) {
                var levelStat = this.includeLevelStats(element);
                pokeObj.levels.push(levelStat);
            } else {
                pokeObj = this.includeRegularStats(element);
                results.push(pokeObj);
            }
        });
        
        for (let ele in results) {
            results[ele].levels = results[ele].levels.sort((a, b) => {
                return (a.skills.total - b.skills.total)
            });
        }

        return results;
    }

    run() {
        this.asyncReadJsonData()
        .then(this.asyncProcess)
        .then(results => this.asyncWriteJsonData(results));
    }
    
}

module.exports = {pocketMonsters};
