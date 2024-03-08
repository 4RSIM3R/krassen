# Permasalah Umum Untuk Reporting

Berikut adalah permasalahan / error yang sering terjadi ketika reporting :

## Laporan RL 5.1 (Unable to get value for result set field "KODE" of class java.lang.Integer)

Jika anda mengalami error seperti ini : 

```text
java.lang.Exception: Invoke failed: [[c:JasperFillManager]]->fillReport((o:JasperReport)[o:JasperReport], (i:Map)[o:HashMap], (i:Connection)[o:ConnectionImpl]). Cause: net.sf.jasperreports.engine.JRException: Unable to get value for result set field "KODE" of class java.lang.Integer. VM: 11.0.21@https://www.redhat.com/
```

Hal tersebut terjadi, karena kode fasyanes melebihi nilai maksimum integer, maka solusinya adalah mengganti type data nya menjadi string saja :

- Silahkan masuk ke server masing masing
- ketikkan `cd /var/www/html/production/webapps/webservice/reports/rl`
- lalu silahkan ketikka perintah berikut untuk edit type data nya : 

```sh
sed -i 's/<field name="KODE" class="java.lang.Integer">/<field name="KODE" class="java.lang.String">/' 62010300015-LaporanRL51.jrxml
```

- Jangan lupa untuk restart server tomcat dengan perintah : `systemctl restart tomcat`
- Lalu cek status tomcat service dengan perintah : `systemctl status tomcat` pastikan running