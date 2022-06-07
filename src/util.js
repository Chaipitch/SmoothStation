import {v4 as uuidv4} from 'uuid'

function chillHop(){
  return [
    {
      name: "List In This Moment",
      artist: "Evil Needle, Misha",
      cover: "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ['#C45265','#60BADE'],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32860"
    },
    {
      name: "Embers",
      artist: "Molly McPhaul, Enluv",
      cover: "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ['#397476','#AF544E'],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30135"
    },
    {
      name: "Letters",
      artist: "Oh Caroline, Lhasa Petik, Towerz",
      cover: "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ['#397476','#AF544E'],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30131"
    },
    {
      name: "Hung Up",
      artist: "Ezzy",
      cover: "https://chillhop.com/wp-content/uploads/2021/09/dc49d7971512be0192848d072efdaaab91a4c73c-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ['#F9DEA9','#D24947'],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24699"
    },
    {
      name: "Jasmine",
      artist: "Aviino",
      cover: "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ['#52636E','#C4825A'],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23065"
    },
  ]
}

export default chillHop;

