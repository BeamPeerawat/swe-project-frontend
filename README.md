# ระบบจัดการคำร้องออนไลน์ (Frontend)

## คำอธิบายโปรเจกต์

ระบบ Frontend สำหรับยื่นคำร้องออนไลน์ของนักศึกษา พัฒนาโดยใช้ Vue.js รองรับการยื่นคำร้อง, ตรวจสอบสถานะ, จัดการโปรไฟล์, Dashboard สำหรับแอดมิน และอื่น ๆ

---

## โครงสร้างโฟลเดอร์

- `public/` : ไฟล์สาธารณะ เช่น index.html, favicon.ico
- `src/`
  - `App.vue` : Root component
  - `main.js` : จุดเริ่มต้นของแอป
  - `assets/` : รูปภาพ โลโก้ ฯลฯ
  - `components/` : ส่วนประกอบ UI เช่น Sidebar, AdminSidebar, AdvisorSidebar, HeadSidebar
  - `router/` : Routing ของ Vue (index.js)
  - `services/` : ฟังก์ชันเรียก API (api.js)
  - `views/` : หน้าแต่ละหน้าของระบบ เช่น Home, Profile, Status, GeneralRequest, OpenCourse, AdminDashboard ฯลฯ
- `package.json` : รายการ dependencies และ script สำหรับรันโปรเจกต์
- `README.md` : คู่มือการใช้งาน

---

## การติดตั้งและใช้งาน

### 1. ติดตั้ง Dependencies

```sh
npm install
```

### 2. รันเซิร์ฟเวอร์สำหรับพัฒนา

```sh
npm run serve
```

### 3. Build สำหรับ Production

```sh
npm run build
```

### 4. Lint & Fix

```sh
npm run lint
```

### 5. รันด้วย Docker

```sh
docker build -t swe-frontend .
docker run -p 8080:8080 swe-frontend
```

### 6. พอร์ตที่ใช้

- ค่าเริ่มต้น: `8080`

---

## ฟีเจอร์หลัก

- ยื่นคำร้อง 3 ประเภท: คำร้องทั่วไป, ขอเพิ่มที่นั่ง, ขอเปิดรายวิชานอกแผน
- ตรวจสอบสถานะคำร้องย้อนหลัง
- จัดการโปรไฟล์ผู้ใช้ (นักศึกษา, อาจารย์, หัวหน้า, แอดมิน)
- Dashboard สำหรับแอดมิน (สถิติผู้ใช้, รายวิชา ฯลฯ)
- ระบบจัดการรายวิชาและผู้ใช้ (สำหรับแอดมิน)
- ระบบบันทึกแบบร่างคำร้อง
- ดาวน์โหลดไฟล์ PDF คำร้องที่ได้รับอนุมัติ
- รองรับ Responsive Design และฟอนต์ภาษาไทย (Kanit)

---

## การตั้งค่าเพิ่มเติม

- สามารถแก้ไข baseURL ของ API ได้ที่ `src/services/api.js`
- หากต้องการเชื่อมต่อกับ Backend ที่รันในเครื่อง ให้เปลี่ยน baseURL เป็น `http://localhost:3000/api`

---

## หมายเหตุ

- ต้องเชื่อมต่อกับ Backend ที่กำหนด API ไว้แล้ว
- ต้องติดตั้ง Node.js เวอร์ชัน 16 ขึ้นไป
- รองรับการ deploy ขึ้น Vercel หรือ Docker

---

## ผู้พัฒนา

- มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น
