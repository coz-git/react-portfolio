import upselfImg from '../assets/Images/upself.jpeg'
import taldioImg from '../assets/Images/Taldio.jpeg'
import codingIDImg from '../assets/Images/CodingID.jpeg'
import oasysImg from '../assets/Images/oasys.jpeg'
import lpsImg from '../assets/Images/lps.jpeg'

export const Works = [
    {
        id:1,
        name:"Upself.ID",
        desc:"Upself merupakan ide sebuah startup yg bergerak di bidang kesehatan mental yang menyediakan layanan konseling secara online, layanan edukasi kesehatan mental, serta layanan berbagi pengalaman dengan sesama penyintas, dan komunitas peduli kesehatan mental.",
        tags:["PHP","Codeigniter","CSS", "Javascript", "FullStack Dev"],
        date:"13 May, 2021",
        imgSrc:`${upselfImg}`,
        link:"/"
    },
    {
        id:2,
        name:"Taldio",
        desc:"Taldio merupakan salah satu product yang dimiliki PT. Nawadata Solution yg berfokus pada platform bertemunya Lembaga Outsourcing dan Kandidat Pencari Kerja",
        tags:["ReactJS","Frontend Dev"],
        date:"5 July, 2021",
        imgSrc:`${taldioImg}`,
        link:"https://www.taldio.com/welcometotaldio"
    },
    {
        id:3,
        name:"Coding.ID",
        desc:"Coding.ID merupakan salah satu product yang dimiliki PT. Nawadata Solution yang berfokus pada platform belajar programing, yang menyediakan layanan dari mulai Bootcamp, Event, Learning Course",
        tags:["PHP","Laravel","CSS", "Javascript", "FullStack Dev"],
        date:"6 July, 2021",
        imgSrc:`${codingIDImg}`,
        link:"https://coding.id/"
    },
    {
        id:4,
        name:"Oasys",
        desc:"Oasys yang merupakan singkatan dari Automatic Assessment adalah sub product Coding.ID yang digunakan untuk para peserta bootcamp dan para pendaftar kelas Coding.ID untuk mengerjakan Logic Programming Test",
        tags:["ReactJS","Laravel","FullStack Dev"],
        date:"26 May, 2021",
        imgSrc: `${oasysImg}`,
        link:"/"
    },
    {
        id:5,
        name:"LPS (Lembaga Penjamin Simpanan)",
        desc:"Dipinjam oleh tim divisi project untuk terlibat dalam project LPS module glik yang berfokus pada proses likuidasi bank",
        tags:[".NET Core","Backend Dev"],
        date:"3 Feb, 2021",
        imgSrc: `${lpsImg}`,
        link:"https://www.lps.go.id/web/guest/home"
    },
] 