const axios = require("axios")
const rl = require("readline").createInterface(process.stdin,process.stdout)
const url = "https://www.iplocate.io/api/lookup/"

function main(){
    rl.question("\n[!]Give some ip address: ", (answer) => {
        axios({
            method:'get',
            url:url + answer
        }).then(res => {
            let data = res.data
            let msg = answer === "" ? "Your ip address" : `${answer} Ip Address`
            let description = `\nIp Address: ${data.ip || "None"}\nCountry: ${data.country || "None"}\nCity: ${data.city || "None"}\nContinent: ${data.continent || "None"}\nTimezone: ${data.time_zone || "None"}\nLongitude: ${data.longitude}\nLatitude: ${data.latitude}\nOrganization: ${data.org || "None"}\n`
            console.log(msg);
            console.log(description) 

            process.exit()
        }).catch(err => {
            console.log(`Can't find the ip address: ${answer}\n`);
            process.exit()
        })
    })
}

main()