var xlsx = require("xlsx");
const fs = require("fs");

async function TransformData(){
    var workbook = xlsx.readFile("src/shared/data-set.xlsx");
    var shet_name_list = workbook.SheetNames;
    var xlData = xlsx.utils.sheet_to_json(workbook.Sheets(shet_name_list[0])); //captura la data que contiene la hoja

    for(const item of xlData){ //recorre toda la data
        var object = `{"prompt": "${item.Question} ->","completion": "${item.Answer} END"}`; 
        await fs.appendFileSync("src/shared/data-set-jsonl", object, "utf8", function(){})
        await fs.appendFileSync("src/shared/data-set-jsonl", "\r\n", "utf8", function(){})
    }
}