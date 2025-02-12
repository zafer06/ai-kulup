# Nginx imajını alıyoruz
FROM nginx:alpine

# Statik dosyalarınızın bulunduğu klasörü konteynere kopyalayın
COPY ./ /usr/share/nginx/html

# Nginx'in varsayılan portunu açın
EXPOSE 5010
