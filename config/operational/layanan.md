# Layanan

Berikut adalah permasalahan / error yang sering terjadi di fitur layanan pasien (pendaftaran, rekam medis, dsb)


## Mengganti klausul atau kata - kata di general consent

Secara default, klausul dan pemilihan kata general consent sudah di sediakan, akan tetapi mungkin dari masing-masing instansi ingin mengubah kata kata, seperti menyesuaikan nama instansi dsb, berikut adalah cara untuk mengganti kata kata nya : 

- Silahkan akses dulu database masing masing, bisa mengikut command sebagi berikut : 

```sh
# Jika langsung dari server
mysql -u your_username -p
# Jika di akses secara remote
mysql -h YOUR_IP -u your_username -p
```

Pastikan anda sudah men-allow firewall di port `3306` dan allow user untuk connect secara remote, panduan ada [disini](https://www.digitalocean.com/community/tutorials/how-to-allow-remote-access-to-mysql)

- Pilih database `master` dengan commad  : 

```sql
use master
```

- Informasi kata kata general consent, dapat di lihat di table `general_consent` dengan command :

```sql
SELECT * FROM general_consent\G
```

Maka akan keluar output seperti berikut

```txt
*************************** 1. row ***************************
ID: 1
JENIS: 1
DESKRIPSI: Selama dalam perawatan di RSUP Dr. Wahidin Sudirohusodo Makassar, pasien/keluarga bersedia menerima informasi terkait dengan pemeriksaan yang akan dilakukan dan tindakan medis, keperawatan serta pemeriksaan penunjang lainnya.
DESCRIPTION: During hospitalization in dr. Wahidin Sudirohusodo Hospital, patient consent to performed medical examination and treatment, nursing care, and other required examination
...........
```

- Untuk melakukan update, anda dapat mengunakan command sebegai berikut, `ID` dan `JENIS` harus spesifik :

```sql
UPDATE general_consent SET DESKRIPSI="kata kata anda sendiri" WHERE ID=1 AND JENIS=1;
```

- Untuk check memastikan apakah update sudah berhasil, gunakan command : 

```sql
SELECT * FROM general_consent WHERE ID=1 AND JENIS=1\G
```