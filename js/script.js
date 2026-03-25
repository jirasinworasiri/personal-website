/**
 * ฟังก์ชันคำนวณเวลาถอยหลัง (Countdown Timer)
 * อ้างอิงหลักการ Progressive Enhancement: 
 * หาก JS ไม่ทำงาน ผู้ใช้จะเห็นข้อความพื้นฐานใน HTML
 */
function updateCountdown() {
    const graduationDate = new Date("March 31, 2027 09:00:00").getTime();
    const now = new Date().getTime();
    const distance = graduationDate - now;

    // คำนวณวัน ชั่วโมง นาที และวินาที
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // แสดงผลลงใน element ที่มี id "countdown-timer"
    const display = document.getElementById("countdown-timer");
    if (display) {
        display.innerHTML = `${days} วัน ${hours} ชม. ${minutes} นาที ${seconds} วิ`;
    }

    // หากถึงวันเรียนจบแล้ว
    if (distance < 0) {
        clearInterval(timerInterval);
        display.innerHTML = "ยินดีด้วย! คุณเรียนจบแล้ว 🎉";
    }
}

// อัปเดตทุกๆ 1 วินาที
const timerInterval = setInterval(updateCountdown, 1000);

// เรียกใช้งานครั้งแรกทันทีไม่ต้องรอ 1 วินาที
updateCountdown();