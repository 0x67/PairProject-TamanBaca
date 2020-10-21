# Pair Project - Taman Baca
Hacktiv8 Phase1 Pair Project by [Teguh Eggi Andriawan](https://github.com/teguh-ea) dan [Gabriel Putra P.](https://github.com/0x67)

### Install dependencies
Run `npm install`

### Project Structure
1. Yang berhubungan dengan Sequelize (model, seed, migration, dll) ada di dalam folder `database/`. Udah ada config untuk Sequelize di file `.sequelizerc`

2. Contoh isi folder `controllers/`
 * `controllers/AuthController.js`
 * `controllers/UserController.js`
 * `controllers/AdminController.js`

3. Routing:
  * `/` Semua daftar buku yang ada dan nggak lagi dipinjam. Tapi yang bisa pinjam cuman user udah register.
  * `/register`
  * `/login`
> Untuk `login` atau `register` controllernya pakai yang `AuthController.js`buat ngurus tipe-user, hashing, dll
>
  * `/user/pinjam` (pake session) daftar buku yang bisa dipinjam
  sistem checkout
  * `/user/pinjam/checkout` checkout buku apa aja yang mau dipinjam
  * `/user/dashboard/:id`
   Redirect kesini abis successful login. Mungkin isinya bisa ada buku apa aja yang udah dipinjam / kapan waktu kembaliin. 
  * `/admin/dashboard/:id`
   Isinya bisa buku apa yang lagi dipinjam, kapan jadwal kembali, liat daftar buku dll
  * `/admin/books`Lihat semua buku beserta actionnya
  * `/admin/books/add` 