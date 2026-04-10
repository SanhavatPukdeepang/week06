// 1. คลาสสำหรับเก็บข้อมูลสัตว์ (เพื่อให้ข้อมูลเป็นระเบียบ)
class Animal {
    constructor(data) {
        this.name = data.name;
        this.slogan = data.characteristics.slogan;
        this.speed = data.characteristics.top_speed;
        this.diet = data.characteristics.diet;
        this.locations = data.locations;
    }

    displayInfo() {
        console.log("--- รายงานข้อมูลสัตว์ ---");
        console.log("ชื่อ: " + this.name);
        console.log("คำขวัญ: " + this.slogan);
        console.log("ความเร็ว: " + this.speed);
        console.log("อาหาร: " + this.diet);
        console.log("ถิ่นที่อยู่หลัก: " + this.locations[0]);
        console.log("----------------------");
    }
}

// 2. คลาสสำหรับจัดการการดึงข้อมูลจาก API (Service)
class AnimalService {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://api.api-ninjas.com/v1/animals";
    }

    fetchAnimal(animalName) {
        const url = this.baseUrl + "?name=" + animalName;
        const options = {
            method: "GET",
            headers: {
                "X-Api-Key": this.apiKey,
                "Content-Type": "application/json"
            }
        };

        // ส่งคำขอและจัดการข้อมูล
        return fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if (data.length > 0) {
                    // สร้าง Object ใหม่จากคลาส Animal แล้วส่งคืนไป
                    return new Animal(data[0]);
                } else {
                    throw new Error("ไม่พบข้อมูลสัตว์ชื่อนี้");
                }
            });
    }
}

// --- 3. วิธีใช้งาน (Execution) ---

const myKey = "nEUABbjatdACNheqAnxOjbeqjEiiFgvfN6tgLngY";
const service = new AnimalService(myKey); // สร้างตัวจัดการ API

service.fetchAnimal("cheetah")
    .then(function(animalObj) {
        // ตอนนี้เราจะได้ 'วัตถุ' (Object) ที่มีความสามารถชื่อ displayInfo
        animalObj.displayInfo();
    })
    .catch(function(error) {
        console.log("เกิดข้อผิดพลาด: " + error.message);
    });