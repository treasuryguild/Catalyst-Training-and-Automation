//Helper function to get value by id
function getValue(name){
    return document.getElementById(name).value
  }
  
  function validateSubmission(){
    //save all the input values
    const name = getValue('name')
    const budgetB = getValue('budgetB')
    const ada = getValue('ada')
    const description = getValue('description')
    const pool = getValue('pool')
    
    //generate a filename
    const filename = new Date().getTime().toString() + '-' + name.replace(/\s/g, '-') + ".json"
    
    function ideascaleLink(pool) {
      var iLink = "";
      switch(pool) {
        case 'Open Source Training':
          iLink = "https://cardano.ideascale.com/c/idea/368678";
          break;
        case 'Distributed Auditability':
          iLink = "https://cardano.ideascale.com/c/idea/366707";
          break;
        default:
          iLink = "";
          break;
      }
      return iLink;
    }    
    
    //Generate a string mimicing the file structure
    //Indentation is important here
    let fileText = `{
  "id" : "${new Date().getTime().toString()}",
  "date": "${new Date().toUTCString()}",
  "project": "Training and Automation",
  "pool": "${pool}",
  "ideascale": "${ideascaleLink(pool)}",
  "budget": "${budgetB}",
  "ada": "${ada}",
  "name": "${name}",
  "txid": "",
  "description": "${description}"
}
`
    
    //Encode string to URI format
    const encodedFileText = encodeURIComponent(fileText)
  
    //Generate a github link with query parameter
    
    function githubQueryLink(pool) {
      var answer = "";
      switch(pool) {
        case 'Open Source Training':
          answer = "Fund6/Open-Source-Training/";
          break;
        case 'Distributed Auditability':
          answer = "Fund6/Distributed-Auditability/";
          break;
        default:
          answer = "";
          break;
      }
      return answer;
    }

    function githubQueryLink2(budgetB) {
      var answer = "";
      switch(budgetB) {
        case 'Incoming IOG':
          answer = "Incoming-IOG/";
          break;
        case 'Test Transaction':
          answer = "Test-Transaction/";
          break;
        case 'Continuous Integration Development':
          answer = "Continuous-Integration-Development/";
          break;
        case 'Documentation and presentation':
          answer = "Documentation-and-presentation/";
          break;
        case 'Marketing':
          answer = "Marketing/";
          break;
        case 'Workshops':
          answer = "Workshops/";
          break;
        case 'Youtube':
          answer = "Youtube/";
          break;
        default:
          answer = "";
          break;
      }
      return answer;
    }
    //Open in a new tab
  window.open("https://github.com/treasuryguild/Training-and-Automation/new/main/Transactions/" + githubQueryLink(pool) + githubQueryLink2(budgetB) + "new?value=" + encodedFileText +"&filename=" + filename);
    
  }
