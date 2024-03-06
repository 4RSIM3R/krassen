# Pertemuan Teknis Penyelenggaran RME (Bogor, 6 Maret 2024)

Catatan Dari Teknis Penyelenggaran RME, Bogor 6 Maret 2024

## Q&A Teknikal (RSWS Makassar) : 

Ketika menambahkan stock, secara random berkurang, atau tidak bertambah? -> bisa di cek stock opname nya dulu
Cara mendapatkan kode faskes? -> silahkan bisa daftar ke [dfo](https://dfo.kemkes.go.id/login)
Allow IP Untuk Reporting? -> Di klien di setting gateway nya, jadi yang di allow via gateway, forwarding
Si Ranap Gagal Koneksi? -> Pastikan antrian online ter-install


## Request : 

- Resume Medis Untuk IGD
- Integrasi BSRE (cuman untuk pemerintah saja)
- Paket obat racikan

## Notes

- Stored Procedure Based Query
- Kalau mau ngubah local.php, dan bikin file baru, pastikan copy an nya jangan pakai extension .php (local-backup.txt)
- Di Disable Restrict IP Pas Cetak ->  module/Plugins/v2/RequestReportResource.php -> AUTH_TYPE_IP_OR_LOGIN -> change ke AUTH_TYPE_NONE
- Backup DB without lagging the entrie app?? Best Practices Nya Gimana
- Httpd -> event
- xtrabackup, to s3 soon
- auto increment??
- Informasi -> Informasi Pengunjung -> Pilih Poli -> Bisa Refresh -> Bisa Manggil Pasien
- Report pastikan tomcat jalan, java 11.0.20
- /etc/systemd/system/tomcat.service
- make sure javabridge exist -> upgrade-lib-javabridge.sh
- unkwon field harus periksa sql 