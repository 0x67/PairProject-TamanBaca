# Pair Project - Taman Baca
Hacktiv8 Phase1 Pair Project by [Teguh Eggi Andriawan](https://github.com/teguh-ea) dan [Gabriel Putra P.](https://github.com/0x67)

### Install dependencies
Run `npm install`

### Project Structure
1. Yang berhubungan dengan Sequelize (model, seed, migration, dll) ada di dalam folder `database/`. Udah ada config untuk Sequelize di file `.sequelizerc`

2. Contoh isi folder `controllers/`
 * `controllers/UserController.js`
 * `controllers/BookController.js`

3. Routing:
Fitur user
  * /, melihat semua buku (semua user, ngga perlu auth)
  * /register, misal user bisa register sendiri
  * /login

  * /book/pinjam, form buat pinjam buku user yg udah login isinya buku yg nggak lagi dipinjam
  * /book/checkout, perlu kah? buat nanti user buat konfirmasi 

  * Fitur admin (aku tambahin admin aja didpeannya ya biar nggak bingung wkwk)
bagian buku
  * /admin/book, buat si admin ngemanage buku kayak ngeliat status pinjam dll
  * /admin/book/add, buat nambah buku (admin)
  * /admin/book/edit, buat edit buku (admin)
  * /admin/book/delete, buat delete buku (admin)

bagian user
  * /admin/user, ngeliat daftar user
  * /admin/user/edit, buat edit pas / ganti role (admin)
  * /admin/user/delete, buat delete user (admin)
  * /admin/user/add, misal nggak ada fitur register buat user / atau mungkin admin juga bisa nambahin user