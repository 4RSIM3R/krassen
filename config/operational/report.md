# Permasalah Umum Untuk Reporting

Berikut adalah permasalahan / error yang sering terjadi ketika reporting

## Unable to get value for result set field "KODE" of class java.lang.Integer

Jika anda mengalami error seperti ini : 

```text
java.lang.Exception: Invoke failed: [[c:JasperFillManager]]->fillReport((o:JasperReport)[o:JasperReport], (i:Map)[o:HashMap], (i:Connection)[o:ConnectionImpl]). Cause: net.sf.jasperreports.engine.JRException: Unable to get value for result set field "KODE" of class java.lang.Integer. VM: 11.0.21@https://www.redhat.com/
```

Hal tersebut terjadi, karena kode fasyanes melebihi nilai maksimum integer, maka solusinya adalah mengganti type data nya menjadi string saja :

- Silahkan masuk ke server masing masing
- ketikkan `cd /var/www/html/production/webapps/webservice/reports/rl`
- lalu silahkan buat 1 file bernama patch_kode.sh, dengan isi sebagai berikut

```sh
#!/bin/bash

# Define the directory to start the search from, '.' means the current directory
start_dir="."

# Find all .jrxml files in the directory and its subdirectories
find "$start_dir" -type f -name "*.jrxml" | while read -r file; do
    echo "Processing file: $file"
    # Execute the updated sed command on the file
    sed -i 's/name="KODE" class="java.lang.Integer"/name="KODE" class="java.lang.String"/g' "$file"
done
```

- Jangan lupa untuk restart server tomcat dengan perintah : `systemctl restart tomcat`
- Lalu cek status tomcat service dengan perintah : `systemctl status tomcat` pastikan running

## Unable to get value for result set field "KODERS" of class java.lang.Integer

Jika anda mengalami error seperti ini : 

```text
java.lang.Exception: Invoke failed: [[c:JasperFillManager]]->fillReport((o:JasperReport)[o:JasperReport], (i:Map)[o:HashMap], (i:Connection)[o:ConnectionImpl]). Cause: net.sf.jasperreports.engine.JRException: Unable to get value for result set field "KODERS" of class java.lang.Integer. VM: 11.0.21@https://www.redhat.com/
```

Hal tersebut terjadi, karena kode fasyanes melebihi nilai maksimum integer, maka solusinya adalah mengganti type data nya menjadi string saja :

- Silahkan masuk ke server masing masing
- ketikkan `cd /var/www/html/production/webapps/webservice/reports/rl`
- lalu silahkan buat 1 file bernama patch_kode_rs.sh, dengan isi sebagai berikut

```sh
#!/bin/bash

# Define the directory to start the search from, '.' means the current directory
start_dir="."

# Find all .jrxml files in the directory and its subdirectories
find "$start_dir" -type f -name "*.jrxml" | while read -r file; do
    echo "Processing file: $file"
    # Execute the updated sed command on the file
    sed -i 's/name="KODERS" class="java.lang.Integer"/name="KODERS" class="java.lang.String"/g' "$file"
done
```

- Jangan lupa untuk restart server tomcat dengan perintah : `systemctl restart tomcat`
- Lalu cek status tomcat service dengan perintah : `systemctl status tomcat` pastikan running