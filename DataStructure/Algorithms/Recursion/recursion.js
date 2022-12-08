class Folder {
  constructor(name, files, folders){
    this.name = name
    this.files = files
    this.folders = folders
  }

  addFolder(folder){
    this.children.push(folder)
    return this
  }
}

const myDevNotes = {
  directory: "myDevNotes",
  files: ["Readme.md"],
  folders: [
    {
      directory: "devDesign",
      files: ["foundation.md"],
      folders: []
    },
    {
      directory: "DS_Algo",
      files: [],
      folders: [
        {
          directory: "DataStructure",
          files: ["linkedList.md", "arrays.md", "tree.md"],
          folders: []
        },
        {
          directory: "Algo",
          files: ["search.md", "recursion.md"],
          folders: []
        }
      ]
    }
  ],
}

function printDir(dir, lvl=0){
  const tabs = (lvl) => {
    let spaces = []
    for (let i = 0; i < lvl; i++) {
      spaces.push(" ")
    }
    return spaces.join("")
  }

  console.log(`${tabs(lvl)} ${dir.directory}:\n${tabs(lvl)}  ${dir.files.join(`\n${tabs(lvl)}`)}\n`)
  if(dir.folders.length > 0){
    dir.folders.forEach(folder => printDir(folder, lvl + 1));
  }
}

printDir(myDevNotes)
