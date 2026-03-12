const loginUser="admin"
const loginPass="fbi"

function login(){

if(user.value===loginUser && pass.value===loginPass){

login.style.display="none"
app.style.display="block"

load()

}else{

alert("Wrong login")

}

}

function showPage(page){

document.getElementById("agents").style.display="none"
document.getElementById("cases").style.display="none"

document.getElementById(page).style.display="block"

}

let agents=JSON.parse(localStorage.getItem("agents")) || []
let cases=JSON.parse(localStorage.getItem("cases")) || []

let agentID=agents.length+1
let caseID=cases.length+1

function save(){

localStorage.setItem("agents",JSON.stringify(agents))
localStorage.setItem("cases",JSON.stringify(cases))

}

function load(){

agents.forEach(createAgentRow)
cases.forEach(createCaseRow)

showPage("agents")

}

function addAgent(){

let agent={
id:agentID++,
name:agentName.value,
rank:agentRank.value,
division:agentDivision.value
}

agents.push(agent)
save()
createAgentRow(agent)

}

function createAgentRow(a){

let row=agentTable.insertRow()

row.insertCell(0).innerText=a.id
row.insertCell(1).innerText=a.name
row.insertCell(2).innerText=a.rank
row.insertCell(3).innerText=a.division

let btn=document.createElement("button")
btn.innerText="Delete"

btn.onclick=function(){

agents=agents.filter(x=>x.id!==a.id)
save()
row.remove()

}

row.insertCell(4).appendChild(btn)

}

function addCase(){

let c={
id:caseID++,
name:caseName.value,
agent:caseAgent.value
}

cases.push(c)
save()
createCaseRow(c)

}

function createCaseRow(c){

let row=caseTable.insertRow()

row.insertCell(0).innerText=c.id
row.insertCell(1).innerText=c.name
row.insertCell(2).innerText=c.agent

let btn=document.createElement("button")
btn.innerText="Delete"

btn.onclick=function(){

cases=cases.filter(x=>x.id!==c.id)
save()
row.remove()

}

row.insertCell(3).appendChild(btn)

}