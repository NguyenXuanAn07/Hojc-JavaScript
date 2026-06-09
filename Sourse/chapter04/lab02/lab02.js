const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;
const avgScore = (toan, van, anh) =>
   {return (toan + van + anh)/3
}

const rating = (avg) => {
    if (avg >= 9 ){
       return "Xuat Sac"
    } else if(avg>=8 && avg<9){
       return "Gioi"
    } else if (avg>=6.5 && avg<8) {
       return "Kha"
    } else {
       return "Trung binh"
    }
}
const avg = avgScore(diemToan,diemToan,diemVan)
console.log(`
    AVG Score: ${avg}
    Rating: ${rating(avg)}    
`)