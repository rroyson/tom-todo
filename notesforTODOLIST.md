step one, process.argv

step two, make handler(cmd) (switch statement) ----put in help folder

step three make lib folder to store.  Require fs
  two functs SET and GET
    fs.writeFileSync('./todos.json', JSON.stringify(data, null, 2))

step four create set and get template for Store

--------------------------------------------------------------------------------------------

create add case return function.  add it to comds folder
call store in cmds folder, export it with function(text)

get todos.  store.get

create todo object pass in text, length(of todo list ie. length +1)

create todo function

append or push to newTodo

store.set(newTodoList)


join(\n) adds each to its own line


convert data to id
get todos
remove to dos that match id

Publish on NPM

under main create bin in json file to make it where you just type todo (cmd)

command call chmod +x index.js
npm publish










    download magnet from app store
