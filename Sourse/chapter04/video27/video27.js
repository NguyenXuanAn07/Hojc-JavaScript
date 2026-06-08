console.log("video 27")

//score: gioi, kha, trung binh, yeu
const score = 8;
switch (true) {
    case (score>=8):
        console.log("Gioi")
        break;
    case (score>=6 && score <8):
        console.log("Kha")
        break;
    case (score>=4 && score <6):
        console.log("Trung binh")
        break;
    default:
        console.log("yeu")
        break;
}